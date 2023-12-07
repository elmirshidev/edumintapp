import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts, Poppins_400Regular,Poppins_600SemiBold,Poppins_500Medium } from '@expo-google-fonts/poppins';
import { MagnifyingGlassIcon, Square3Stack3DIcon} from 'react-native-heroicons/solid'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import img9 from '../assets/img9.png'
import img10 from '../assets/img10.png'
import img11 from '../assets/img11.png'
import img12 from '../assets/img12.png'
import arrowR from '../assets/arrowR.png'
const HomeScreen = () => {

    const lessons = [
        {
            title: "Math",
            bgcolor:"#F39D2C",
            grades: [
                {
                    title: "1'st Grade",
                    short: "Numbers,Addition, ...",
                    img: img1
                },
                {
                    title: "2'nd Grade",
                    short: "Fraction,Decimal, ...",
                    img: img2
                },
                {
                    title: "3'rd Grade",
                    short: "Figures,Areas, ...",
                    img: img3
                },
            ]
        },
        {
            title: "English",
            bgcolor:"#F3DE2C",
            grades: [
                {
                    title: "1'st Grade",
                    short: "Alphabet, Sentence struct...",
                    img: img4
                },
                {
                    title: "2'nd Grade",
                    short: "Questions, Prepositions, ...",
                    img: img5
                },
                {
                    title: "3'rd Grade",
                    short: "Essay, Writing, Reading, ...",
                    img: img6
                },
            ]
        },
        {
            title: "Biology",
            bgcolor:"#6DD952",
            grades: [
                {
                    title: "6'th Grade",
                    short: "Nature of Science, Living T...",
                    img: img7
                },
                {
                    title: "7'th Grade",
                    short: "Ecology, Plants, Life Proce...",
                    img: img8
                },
                {
                    title: "8'th Grade",
                    short: "Agriculture, Zoology, ...",
                    img: img9
                },
            ]
        } ,
        {
            title: "Chemistry",
            bgcolor:"#2C9DF3",
            grades: [
                {
                    title: "7'th Grade",
                    short: "Chromatography, Propor...",
                    img: img10
                },
                {
                    title: "8'th Grade",
                    short: "Atom, Molecular comp...",
                    img: img11
                },
                {
                    title: "9'th Grade",
                    short: "Main Group Elements, ...",
                    img: img12
                },
            ]
        }
    ]
    
    let [fontsLoaded, fontError] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
        Poppins_500Medium
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }


    return (
        <SafeAreaView
            className='px-[30px] pt-10'
            style={{
                flex: 1,
                // paddingVertical:4,
            }}
        >
            <View className=''>
                <Text style={{ fontFamily: '' }} className='text-5xl font-[900] tracking-[-0.96px]'>Courses</Text>
            </View>

            <View className='pt-4 flex flex-row gap-3 items-center'>
                <View className='border-2 flex-1 border-black rounded-lg px-2' style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MagnifyingGlassIcon color={'black'} size={20} />
                    <TextInput
                        style={{ marginLeft: 10, flex: 1, fontSize: 16 }}
                        placeholder='Search'
                    />
                </View>
                <View>
                    <Square3Stack3DIcon color={'black'} size={25} />
                </View>
            </View>

            <ScrollView
                // className=''
                showsVerticalScrollIndicator={false}
            >
                {lessons.map((lesson, index) => {

                    return (
                        <View className='py-4' key={index}>
                            <Text
                                style={{ fontFamily: 'Poppins_500Medium' }}
                                className='text-3xl font-[500]'
                            >
                                {lesson.title}
                            </Text>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                className='pt-2'
                            >
                                {lesson.grades.map((grade, index) => {
                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            className={`flex  flex-col`}
                                            style={{ width: 200, height: 130, borderRadius: 20, marginRight: 10, backgroundColor:lesson.bgcolor }}
                                        >
                                            <View className='flex flex-row justify-between'>
                                                <View className='w-[80px] h-[80px]'>
                                                    <Image className='w-full h-full' source={grade.img}/>
                                                </View>
                                                <View className='pr-3 pt-3 w-[30px] h-[30px]'>
                                                    <Image className='w-full h-full' source={arrowR} />
                                                </View>
                                            </View>

                                            <View className='ml-[10px]'>
                                                <Text style={{ fontFamily: 'Poppins_600SemiBold' }} className='text-base  '>{grade.title}</Text>
                                                <Text style={{ fontFamily: 'Poppins_400Regular' }} className='text-[12px]  text-gray-600'>{grade.short}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })}
                            </ScrollView>
                        </View>
                    )
                })}
            </ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen

