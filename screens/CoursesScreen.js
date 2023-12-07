import { View, Text, Button, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Video, ResizeMode } from 'expo-av';
import mcvideo from '../assets/mcvideo.mp4'
import { useEffect, useRef, useState } from 'react';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { Audio } from 'expo-av';
import part1 from '../audios/part1.mp3'
import part2 from '../audios/part2.mp3'
import part3 from '../audios/part3.mp3'
import part4 from '../audios/part4.mp3'
import part5 from '../audios/part5.mp3'
import part6 from '../audios/part6.mp3'
import part7 from '../audios/part7.mp3'
import part8 from '../audios/part8.mp3'
import part9 from '../audios/part9.mp3'
import { useNavigation } from '@react-navigation/native';

const CoursesScreen = () => {
    const [duration, setduration] = useState(0);
    const navigation = useNavigation();
    const [sound, setSound] = useState();
    async function playSound(count) {
        let data;
        if (count == 0) {
            data = part1;
        } else if (count == 1) {
            data = part2;
        } else if (count == 2) {
            data = part3;
        } else if(count == 3) {
            data = part4;
        } else if(count == 4) {
            data = part5;
        } else if(count == 5) {
            data = part6;
        }
        else if(count == 6) {
            data = part7;
        }
        else if(count == 7) {
            data = part8;
        }
        else if(count == 8) {
            data = part9;
        }
        const { sound } = await Audio.Sound.createAsync(data);
        
        setSound(sound);
        
        await sound.playAsync();
    }

    useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);
    let pythagorean = [
        {
            part: 1,
            text: "Pythagoras, the clever one, discovered a secret about right-angled triangles.",
            audio: part1
        },
        {
            part: 2,
            text: "He said, 'Hey friends, if you have a right- angled triangle, the square of the longest side is equal to the sum of the squares of the other two sides!'",
            audio: part2
        }
        ,
        {
            part: 3,
            text: "Theo, the enthusiastic friend, drew a right-angled triangle in the enchanted sand. ",
            audio: part3
        },
        {
            part:4,
            text: "He labeled the sides 'a,' 'b,' and 'c.' ",
            audio: part4
        },
        {
            part:5,
            text: "Pythagoras pointed to the longest side (c) and said, 'c² is like magic! It's a² plus b²!'",
            audio: part5
        }
        ,
        {
            part: 6,
            text: `Rian, the curious one, asked, "But why is it like that?" Pythagoras smiled and whispered, 'It's the secret language of triangles.'`,
            audio: part6
        },
        {
            part:7,
            text: "When you arrange their sides just right, the magic happens!",
            audio:part7,
        },

        {
            part: 8,
            text: `Theo grabbed sticks to represent the sides.`,
            audio: part8
        } , 
        {
            part:9,
            text: `"Look, if this stick is 'a,' this one is 'b,' and the longest one is 'c,' Pythagoras' magic formula always works! It's like a triangle spell!"`,
            audio: part9
        }
    ]
    const [x, setX] = useState(-1);
    const video = useRef(null);
    const [status, setStatus] = useState({});

  
    return (

        <View className='relative flex-1 justify-center items-center'>
            <View className='absolute z-20 flex gap-6 items-center'>
                <View className='w-[315px] h-[320px] rounded-lg gap-4  bg-white/60'>
                    <Text className='text-lg underline font-bold'>Pythagorean theorem</Text>
                    <View>
                        <Text className='text-lg'>
                            {x >= 0 ? pythagorean[x].text : "Press start to begin"}
                        </Text>
                    </View>
                </View>

                <View className='flex-row space-x-5'>
                    {x == -1 && (
                        <TouchableOpacity onPress={() => {
                            setX((prev) => prev + 1);
                            playSound(x+1)
                        }} className='rounded-lg border-2 border-black/50 bg-white/80  w-[140px] h-[44px] p-[12px] flex justify-center items-center '>
                            <Text className='text-black/50 font-[500]'>
                                Start
                            </Text>
                        </TouchableOpacity>
                    )}
                    {x > 0 && (
                        <TouchableOpacity onPress={() => {
                            setX((prev) => prev - 1)
                            playSound(x-1)
                        }} className='rounded-lg border-2 border-black/50 bg-white/80  w-[140px] h-[44px] p-[12px] flex justify-center items-center'>
                            <Text className='text-black/50 font-[500]'>
                                Previous
                            </Text>
                        </TouchableOpacity>
                    )}


                    {x !== -1 && x < pythagorean.length - 1 ? (
                        <TouchableOpacity onPress={() => {
                            setX((prev) => prev + 1)
                            playSound(x+1)
                        }} className='w-[140px] h-[44px] rounded-lg p-[12px] flex justify-center items-center bg-[#6DD952]'>
                            <Text className='text-white font-[500]'>
                                Next
                            </Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => navigation.navigate("Home")} className='w-[140px] h-[44px] rounded-lg p-[12px] flex justify-center items-center bg-[#6DD952]'>
                            <Text className='text-white font-[500]'>
                                {x == -1 ? "Exit" : "Finish"}
                            </Text>
                        </TouchableOpacity>
                    )}

                </View>
            </View>
            <Video
                ref={video}
                className='w-full h-full'
                source={mcvideo}
                isLooping={true}
                isMuted={true}
                useNativeControls={false}
                shouldPlay={true}
                resizeMode={ResizeMode.CONTAIN}
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </View>

    )
}

export default CoursesScreen