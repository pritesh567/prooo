// // import React from 'react';
// // import { View, StyleSheet, Text, TextInput, TouchableOpacity, Dimensions, ImageBackground, Image } from 'react-native';

// // import Header from './Header';
// // import ImagePicker, { openPicker } from 'react-native-image-crop-picker';
// // import LinearGradient from 'react-native-linear-gradient';
// // function Upload({navigation}) {

// //     const Ifont = 'Poplin';

// //     function openPicker() {
// //         ImagePicker.openPicker({
// //             width: 300,
// //             height: 400,
// //             cropping: false,
// //             // includeBase64: true
// //         }).then(image => {navigation.navigate("NoCropBox", { img: image });
// //         })
// //             .catch((e) => console.log(e));
// //     }

// //     return (

// //         <View style={{ backgroundColor: '#E4D9FB', height: Dimensions.get('window').height }}>
// //             <LinearGradient colors={['#ffffff', '#ECDCF7']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
// //             <View style={styles.card}>
// //                 <Header title="9 Grid" />
// //             </View>
// //             </LinearGradient>
// //             <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
// //                 <View style={{ height: 130, width: 130, marginTop: 200 }}>
// //                     <Image
// //                         style={{ height: 130, width: 130 }}
// //                         source={require('./Pic/whiteborder.png')} />
// //                     <Image
// //                         style={{ height: 35, width: 53, position: 'absolute', top: 48, left: 40 }}
// //                         source={require('./Pic/upload.png')} />
// //                 </View>

// //             </View>
// //             <Text style={{ fontFamily: `${Ifont}`, textAlign: 'center', fontSize: 15, fontWeight: '300', color: '#000', marginTop: 13 }}>Upload an image</Text>
// //             <Text style={{ fontFamily: `${Ifont}`, textAlign: 'center', fontSize: 11, fontWeight: '300', color: '#000' }}>Select an iMage to make some cool grids</Text>

// //             <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: 37 }}>

// //                 <TouchableOpacity onPress={openPicker} style={{
// //                     shadowColor: "#3672E9",
// //                     shadowOffset: {
// //                         width: 0,
// //                         height: 12,
// //                     },
// //                     shadowOpacity: 0.58,
// //                     shadowRadius: 16.00,

// //                     elevation: 24,

// //                     alignItems: 'center', borderRadius: 15, backgroundColor: '#3672E9', width: '80%', height: 59, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
// //                 }}>
// //                     <Text style={{ fontFamily: `${Ifont}`, color: '#BFF4FF', fontSize: 18, fontWeight: '500' }}>Upload Image</Text>
// //                 </TouchableOpacity>
// //             </View>

// //         </View>
// //     );
// // }

// // const styles = StyleSheet.create({})

// // export default Upload;



// // main code------------------------------------------------------------------------

// import React from 'react';
// import { View, StyleSheet, Text, TextInput, TouchableOpacity, Dimensions, ImageBackground, Image } from 'react-native';
// import Header from '../9Grid/Header';
// import LinearGradient from 'react-native-linear-gradient';
// import ImagePicker, { openPicker } from 'react-native-image-crop-picker';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


// const Uploadimage = ({ navigation }) => {

//     const Ifont = 'Poplin';
//     const openPicker = () => {
//         ImagePicker.openPicker({
//             // width: 300,
// // height:500,
//             cropping: false,
//             cropperToolbarWidgetColor:"black",
//             cropperToolbarColor :'#EFE4FB',
//             cropperActiveWidgetColor:"blue",
//             freeStyleCropEnabled:true,
//             hideBottomControls:true,
//             showCropFrame :true,
//             cropperToolbarTitle: "             Swipe Photo",
//             showCropGuidelinesColor :"black",
//             // aspectRatio:1*3,
//             includeBase64: true,


//             //  width: (400),
//         // height: (400),
//         // compressImageMaxWidth:(300),
//         // compressImageMaxHeight:(300),
//         }).then(image => {navigation.navigate ("Swipe3" ,{img : image }); })}

//     return (
//         <View style={{ backgroundColor: '#E4D9FB', height: Dimensions.get('window').height }}>
//             <LinearGradient colors={['#ffffff', '#ECDCF7']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
//                 <View style={styles.card}>
//                     <Header navigation={navigation} title="Swipe" />
//                 </View>
//             </LinearGradient>

//             <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
//                 <View style={{ height: 130, width: 130, marginTop: 200 }}>
//                     <Image
//                         style={{ height: 130, width: 130 }}
//                         source={require('./Pic/whiteborder.png')}
//                     />
//                     <Image
//                         style={{ height: 35, width: 53, position: 'absolute', top: 48, left: 40 }}
//                         source={require('./Pic/upload.png')}
//                     />
//                 </View>

//             </View>
//             <Text style={{ fontFamily: `${Ifont}`, textAlign: 'center', fontSize: 15, fontWeight: '300', color: '#000', marginTop: 13 }}>Upload an image</Text>
//             <Text style={{ fontFamily: `${Ifont}`, textAlign: 'center', fontSize: 11, fontWeight: '300', color: '#000' }}>Select an iMage to make some cool grids</Text>

//             <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: 37 }}>

//                 <TouchableOpacity onPress={openPicker} style={{
//                     shadowColor: "#3672E9",
//                     shadowOffset: {
//                         width: 0,
//                         height: 12,
//                     },
//                     shadowOpacity: 0.58,
//                     shadowRadius: 16.00,

//                     elevation: 24,

//                     alignItems: 'center', borderRadius: 15, backgroundColor: '#3672E9', width: '80%', height: 59, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
//                 }}>
//                     <Text style={{ fontFamily: `${Ifont}`, color: '#BFF4FF', fontSize: 18, fontWeight: '500' }}>Upload Image</Text>
//                 </TouchableOpacity>
//             </View>

//         </View>
//     );
// }

// const styles = StyleSheet.create({
// button: {
//     backgroundColor: 'blue',
//     // top:100,
//     width: 25,
//     height: 25,
//     // alignContent:'center',
//     borderRadius: 15,
//   },
// });
// export default Uploadimage;

