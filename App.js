import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, FlatList, Image, ScrollView, LogBox } from 'react-native';
import { Ionicons, Entypo, AntDesign, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import UTFSequence from 'react-native/Libraries/UTFSequence';
const { width, height } = Dimensions.get('screen')

const TopBar = () => {
  const [loaded] = useFonts({
    Gilory: require('./assets/Gilroy-ExtraBold.otf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={{
      width,
      height: 0.07 * height,
      marginTop: 0.06 * height,
      flexDirection: 'row',
      paddingHorizontal: 15,
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Ionicons name="menu" size={40} color="#919496" />
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <MaterialIcons name="location-on" size={30} color="#9da2f2" />
        <Text style={{
          color: '#2b37e0',
          fontWeight: 'bold',
          fontSize: 15,
          fontFamily: 'Gilory'
        }}>Los Angeles</Text>
        <Text style={{
          color: '#5f67ec',
          fontWeight: 'bold',
          fontSize: 15,
          fontFamily: 'Gilory'
        }}>, </Text>
        <Text style={{
          color: '#bcbff5',
          fontWeight: '400',
          fontSize: 15,
          paddingRight: 17
        }}>California</Text>
        <Image
          source={require('./assets/profile.jpg')}
          style={{
            height: 0.055 * height,
            width: 0.055 * height,
            borderRadius: 0.055 * height / 2,
            backgroundColor: 'white',
            resizeMode: 'center'
          }}
        />
      </View>
    </View>
  )
}
const Name = () => {
  const [loaded] = useFonts({
    Gilory: require('./assets/Gilroy-ExtraBold.otf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={{
      marginTop: 15,
      height: 0.15 * height,
      width,
      marginLeft: 40
    }}>
      <Text
        style={{
          color: '#bcbff5',
          fontWeight: '400',
          fontSize: 40,
          fontFamily: 'Gilory'
        }}
      >Hi <Text
        style={{
          color: '#2b37e0',
          fontWeight: '500',
          fontSize: 40,
          fontFamily: 'Gilory'
        }}
      >Martin,</Text></Text>
      <Text style={{
        color: '#bcbff5',
        fontWeight: '400',
        fontSize: 17,
        paddingTop: 10,
        fontFamily: 'Gilory'
      }}>Let's Discover a New Adevnture!</Text>
    </View>
  )
}
const TextInputComponent = () => {
  const [loaded] = useFonts({
    Gilory: require('./assets/Gilroy-ExtraBold.otf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={{
      borderRadius: 20,
      height: 0.055 * height,
      backgroundColor: '#f8f8ff',
      width: width * 0.85,
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      bottom: 10
    }}>
      <AntDesign name="search1" size={24} color="blue" style={{
        paddingLeft: 15
      }} />
      <TextInput
        placeholder='Search Hotels, Taxi etc...'
        style={{
          width: width * 0.42,
          marginRight: 50
        }}
      />
      <Text style={{
        fontSize: 35,
        color: '#e8e8ef',
        paddingBottom: 5,
        paddingLeft: 1,
        fontWeight: '200',
      }}>|</Text>
      <TouchableOpacity>
        <AntDesign
          style={{
            paddingRight: 10,
            paddingTop: 5,

          }} name="down" size={20} color="#e8e8ef" />
      </TouchableOpacity>
    </View>
  )
}
const BoxOptions = ({ backgroundColor, name, type }) => {
  const [loaded] = useFonts({
    Gilory: require('./assets/Gilroy-ExtraBold.otf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <TouchableOpacity>
      <View style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 0.1 * height,
        width: 0.1 * height,

      }}>
        <View style={{
          height: 0.065 * height,
          width: 0.065 * height,
          borderRadius: 20,
          backgroundColor,
          justifyContent: 'center',
          alignItems: 'center',
          shadowOpacity: 0.1
        }}>
          <MaterialIcons name={name} size={30} color="white" />
        </View>
        <Text style={{
          color: '#8784aa',
          fontWeight: '500',
          fontFamily: 'Gilory'
        }}>{type}</Text>
      </View>
    </TouchableOpacity>
  )
}
const YourTrips = () => {
  const [loaded] = useFonts({
    Gilory: require('./assets/Gilroy-ExtraBold.otf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={{
      width,
      marginTop: 30,
      marginLeft: 40
    }}>
      <Text style={{
        color: '#bcbff5',
        fontWeight: '400',
        fontSize: 40,
        fontFamily: 'Gilory'
      }}>
        Your <Text style={{
          color: '#2b37e0',
          fontWeight: '500',
          fontSize: 40,
          fontFamily: 'Gilory'
        }}>Trips</Text>
      </Text>
    </View>
  )
}

const ListOfTrips = () => {


  const [activeIndex, setActiveIndex] = React.useState(0)
  const [scrollX, onScrollx] = React.useState(0)
  const ref = React.useRef()
  const navigation = useNavigation()


  React.useEffect(() => {
    if (ref.current) {
      let total = 0
      if (activeIndex > 0) {
        for (let i = 0; i < activeIndex; i++) {
          for (let y = 0; y < data[i].imageDetails.length; y++) {
            total++;
          }
        }
        ref.current.scrollTo({ x: total * ((width * 0.45) + 10 + 10), animated: true })
      }
      else {
        ref.current.scrollTo({ x: activeIndex * ((width * 0.45) + 10), animated: true })
      }

    }

  }, [activeIndex])

  const [loaded] = useFonts({
    Gilory: require('./assets/Gilroy-ExtraBold.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <View style={{ flexDirection: 'row', marginTop: 10, right: width * 0.13 }}>
        {
          data.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => {
                setActiveIndex(index)
              }}>
                <View style={{
                  width: (width * 0.7) / data.length,
                  alignItems: 'center',
                }}>
                  <Text style={{
                    color: activeIndex === index ? '#5c65e9' : '#8784aa',
                    fontWeight: '600',
                    fontFamily: 'Gilory',
                  }}>{item.type}</Text>
                  {activeIndex === index ? <Entypo style={{
                    bottom: 5
                  }} name="dot-single" size={24} color="#5c65e9" /> : <Entypo style={{
                    bottom: 5
                  }} name="dot-single" size={24} color="white" />}
                </View>
              </TouchableOpacity>
            )
          })
        }
      </View>

      <ScrollView
        ref={ref}
        horizontal
        bounces={false}
        scrollEventThrottle={16}
        contentContainerStyle={{ marginRight: 10 }}
        snapToInterval={(width * 0.45) + 10 + 10}
        onScroll={(ev) => {
          onScrollx(Math.ceil(Math.ceil(ev.nativeEvent.contentOffset.x) / ((width * 0.45))))
        }
        }
      >

        {data.map((item, index) => {

          if (activeIndex === index) {
            return (

              <View style={{ flexDirection: 'row' }} key={index} >
                <FlatList
                  data={item.imageDetails}
                  keyExtractor={({ item, index }) => index}
                  horizontal
                  snapToInterval={((width * 0.45) + 10 + 10)}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('TravelScreen', { item })
                        }}
                      >
                        <View style={{
                          margin: 10,
                          width: width * 0.45,
                          height: height * 0.3,
                        }}>
                          <Image
                            source={item.image}
                            style={{
                              width: width * 0.45,
                              height: height * 0.3,
                              resizeMode: 'cover',
                              position: 'absolute',
                              borderRadius: 20,
                            }}
                          />
                          <View style={{
                            position: 'relative', marginLeft: 5
                          }}>
                            <Text style={{
                              color: 'white',
                              fontSize: 20,
                              fontWeight: '700',
                              top: 25,
                              left: 10,
                              fontFamily: 'Gilory',
                            }}>{item.name}</Text>

                            <View style={{
                              flexDirection: 'row', top: 33,
                              left: 5,
                            }}>

                              <MaterialIcons name="location-on" size={20} color="white" />
                              <Text style={{
                                color: 'white',
                                fontSize: 15,
                                fontWeight: '400',
                                fontFamily: 'Gilory',
                              }}> {item.Country}</Text>
                            </View>
                          </View>

                        </View>
                      </TouchableOpacity>

                    )
                  }}
                />


              </View>

            )
          }



        })}
      </ScrollView>
    </>
  )
}

const HomeScreen = () => {
  LogBox.ignoreAllLogs(true)
  return (
    <View style={styles.containerHome}>
      <TopBar />
      <Name />
      <TextInputComponent />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: width,
        marginTop: 30
      }}>
        <BoxOptions backgroundColor='#4ccbfb' name="flight" type='Flights' />
        <BoxOptions backgroundColor='#f8855b' name="local-hotel" type='Hotels' />
        <BoxOptions backgroundColor='#5c65e9' name="location-on" type='Places' />
        <BoxOptions backgroundColor='#f66c5e' name="grid-view" type='More' />
      </View>
      <YourTrips />
      <ListOfTrips />


      <StatusBar style="auto" />
    </View >
  )
}

const TravelScreen = ({ navigation, route }) => {

  const [loaded] = useFonts({
    Gilory: require('./assets/Gilroy-ExtraBold.otf'),
  });

  if (!loaded) {
    return null;
  }
  const { item } = route.params
  console.log(item)
  LogBox.ignoreAllLogs();
  return (
    <View style={styles.container}>
      <Image
        source={item.image}
        style={{
          width: width,
          height: height * 0.4,
          resizeMode: 'cover',
          borderBottomRightRadius: 40,
          borderBottomLeftRadius: 40
        }}
      />
      <View style={{
        marginRight: 170
      }}>
        <View style={{
          width: width * 0.7,
          marginLeft: width * 0.7 / 4
        }}>
          <Text style={{
            color: '#282f7c',
            fontWeight: '500',
            fontSize: 40,
            marginTop: 20,
            marginLeft: 10,
            fontFamily: 'Gilory'
          }}>{item.name}, <Text style={{
            color: '#bcbff5',
            fontWeight: '400',
            fontSize: 40,
            marginTop: 20,
          }}>{item.Country}</Text></Text>

          <View style={{
            flexDirection: 'row',
            marginTop: 10,
            marginLeft: 10,
            alignItems: 'center'
          }}>
            <AntDesign name="star" size={24} color="#282f7c" />
            <Text style={{
              color: '#282f7c',
              fontWeight: '500',
              fontSize: 15,
              fontFamily: 'Gilory'
            }}>  4.7</Text>
          </View>
        </View>


      </View>

      <View style={{
        width: width * 0.95,
        height: height * 0.2,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Tickets', item)
        }}>
          <View style={{
            width: width * 0.45,
            height: width * 0.45,
            backgroundColor: '#78d7fe',
            borderRadius: 20
          }}>

            <Text style={{
              color: '#4dccff',
              fontSize: 36,
              fontWeight: '800',
              top: width * 0.17,
              left: 10,
              fontFamily: 'Gilory'
            }}> 2</Text>

            <Text style={{
              color: '#282f7c',
              fontSize: 25,
              fontWeight: '500',
              top: width * 0.21,
              left: 10,
              fontFamily: 'Gilory'
            }}> Tickets </Text>

          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{
            width: width * 0.45,
            height: width * 0.45,
            backgroundColor: '#90EE90',
            borderRadius: 20
          }}>


            <Text style={{
              color: '#4dccff',
              fontSize: 36,
              fontWeight: '800',
              top: width * 0.17,
              left: 10,
              fontFamily: 'Gilory'
            }}>  </Text>

            <Text style={{
              color: '#282f7c',
              fontSize: 25,
              fontWeight: '500',
              top: width * 0.21,
              left: 10,
              fontFamily: 'Gilory'
            }}> Hotels </Text>
          </View>
        </TouchableOpacity>
      </View>


      <View style={{
        width: width * 0.95,
        height: height * 0.2,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>

        <TouchableOpacity>
          <View style={{
            width: width * 0.45,
            height: width * 0.45,
            backgroundColor: '#9295c8',
            borderRadius: 20
          }}>

            <Text style={{
              color: '#5c65e9',
              fontSize: 36,
              fontWeight: '800',
              top: width * 0.17,
              left: 10,
              fontFamily: 'Gilory'
            }}> 16</Text>

            <Text style={{
              color: '#282f7c',
              fontSize: 25,
              fontWeight: '500',
              top: width * 0.21,
              left: 10,
              fontFamily: 'Gilory'
            }}> Places </Text>

          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{
            width: width * 0.45,
            height: width * 0.45,
            backgroundColor: '#f6aa95',
            borderRadius: 20
          }}>

            <Text style={{
              color: '#f66c5e',
              fontSize: 36,
              fontWeight: '800',
              top: width * 0.17,
              left: 10,
              fontFamily: 'Gilory'
            }}> 21<MaterialCommunityIcons style={{
              top: 10
            }} name="temperature-celsius" size={35} color="#f66c5e" /></Text>

            <Text style={{
              color: '#282f7c',
              fontSize: 25,
              fontWeight: '500',
              top: width * 0.21,
              left: 10,
              fontFamily: 'Gilory'
            }}> Temperature </Text>

          </View>
        </TouchableOpacity>
      </View>


    </View >
  );

}

const Details = ({ navigation, route }) => {
  const [loaded] = useFonts({
    Gilory: require('./assets/Gilroy-ExtraBold.otf'),
    GiloryLight: require('./assets/Gilroy-Light.otf'),
  });

  if (!loaded) {
    return null;
  }
  const item = route.params
  console.log(item)
  LogBox.ignoreAllLogs(true)

  return (

    <View style={styles.container}>
      <View style={{ height: 0.45 * height, alignItems: 'center' }}>
        <View
          style={{
            width,
            height: 0.3 * height,
            backgroundColor: '#5c65e9',
            borderBottomLeftRadius: 60,
            borderBottomRightRadius: 60,
            position: 'absolute',
          }}
        />
        <Image
          source={item.image}
          style={{
            width: width * 0.87,
            height: height * 0.27,
            resizeMode: 'cover',
            borderRadius: 40,
            top: 140

          }}
        />

      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <TravelCard fromAbb='LAX' toAbb='LGV' time='10h 20m' from='Los Angeles' to={item.name} timefrom='03:20 PM' timeto='09:40 PM' />
        <TravelCard fromAbb='LGV' toAbb='LAX' time='09h 30m' from={item.name} to='Los Angeles' timefrom='04:20 AM' timeto='10:40 AM' />
      </ScrollView>




    </View >

  )
}

const GlowingDot = () => {
  return (
    <View style={{
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: '#B1b4f4',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <View style={{
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#5f67ec'
      }} />
    </View>
  )
}
const GlowingDotOrange = () => {
  return (
    <View style={{
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: '#f6aa95',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <View style={{
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#f8855b'
      }} />
    </View>
  )
}

const TravelCard = ({ toAbb, fromAbb, to, from, Company, timetaken, timefrom, timeto }) => {


  return (

    <View style={{
      width: width * 0.89,
      height: height * 0.34,
      backgroundColor: 'white',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 20
    }}>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
          <Text
            style={{
              fontFamily: 'Gilory',
              color: '#5f67ec',
              fontSize: 20
            }}> {fromAbb}  </Text>

          <GlowingDot />
        </View>
        <Text
          style={{
            color: '#e8e8ef',
            fontWeight: 'bold',
            fontSize: 20
          }}> - - - - - -  </Text>
        <Ionicons name="airplane-sharp" size={24} color="#282f7c" />
        <Text
          style={{
            color: '#e8e8ef',
            fontWeight: 'bold',
            fontSize: 20
          }}> - - - - - - </Text>
        <GlowingDotOrange />
        <Text
          style={{
            fontFamily: 'Gilory',
            color: '#f8855b',
            fontSize: 20,
          }}>  {toAbb} </Text>
      </View>


      <View style={{
        flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingTop: 10,
        width: width * 0.38
      }}>
        <Text style={{
          right: 100,
          fontFamily: 'Gilory',
          color: '#e8e8ef',
        }}> {from} </Text>
        <Text style={{
          right: 16,
          fontFamily: 'Gilory',
          color: '#282f7c'
        }}> {timetaken}</Text>
        <Text
          style={{
            left: 100,
            fontFamily: 'Gilory',
            color: '#e8e8ef'
          }}> {to} </Text>
      </View>

      <View style={{
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 40,
        width: width * 0.82
      }}>
        <View>
          <Text style={{
            color: '#282f7c',
            fontFamily: 'Gilory',
            fontSize: 20
          }}> {timefrom}</Text>
          <Text style={{
            color: '#e8e8ef',
            fontFamily: 'Gilory',
            paddingTop: 5
          }}> September 2,2020</Text>
        </View>

        <View style={{
        }}>

          <Text style={{
            alignSelf: 'flex-end',
            color: '#282f7c',
            fontFamily: 'Gilory',
            fontSize: 20
          }}> {timeto}</Text>
          <Text style={{
            color: '#e8e8ef',
            fontFamily: 'Gilory',
            paddingTop: 5
          }}> September 3,2020</Text>
        </View>
      </View>

      <Text
        style={{
          color: '#e8e8ef',
          fontWeight: 'bold',
          fontSize: 20,
          paddingTop: 10
        }}
      > ....................................................... </Text>

      <View style={{
        flexDirection: 'row', justifyContent: 'space-between'
        , width: width * 0.82, alignItems: 'center', paddingTop: 20
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: 'tomato'
            }}
          />

          <Text style={{
            color: '#e8e8ef',
            fontFamily: 'Gilory',
            fontSize: 20
          }}>  Norwegian Air</Text>
        </View>

        <Text style={{
          color: '#282f7c',
          fontFamily: 'Gilory',
          fontSize: 25
        }}>$231</Text>
      </View>
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: '#e8e8ef',
          position: 'absolute',
          left: -25,
          top: (width * 0.89) / 2.05
        }}
      />
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: '#e8e8ef',
          position: 'absolute',
          right: -25,
          top: (width * 0.89) / 2.05
        }}
      />
    </View>

  )
}
const data = [
  {
    type: 'Futured',
    imageDetails: [
      {
        Country: 'France',
        name: 'Paris',
        image: require('./assets/paris.jpg')
      }
      ,
      {
        Country: 'UK',
        name: 'London',
        image: require('./assets/london.jpg')
      },
      {
        Country: 'Egypt',
        name: 'Giza',
        image: require('./assets/giza.jpg')
      }
    ]
  },
  {
    type: 'Past',
    imageDetails: [
      {
        Country: 'Egypt',
        name: 'Giza',
        image: require('./assets/giza.jpg')
      },
      {
        Country: 'UK',
        name: 'London',
        image: require('./assets/london.jpg')
      },
    ]
  },
  {
    type: 'All',
    imageDetails: [
      {
        Country: 'France',
        name: 'Paris',
        image: require('./assets/paris.jpg')
      },
      {
        Country: 'Egypt',
        name: 'Giza',
        image: require('./assets/giza.jpg')
      }
    ]
  }

]

const Stack = createStackNavigator()


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name='TravelScreen' component={TravelScreen}
          options={{
            headerTransparent: true,
            headerTitle: (props) => { props.style = { opacity: 0 } },
            headerLeft: (props) => {
              return (

                <Ionicons
                  style={{
                    left: 10,

                  }}
                  {...props}
                  name="chevron-back-sharp" size={30} color="white" />
              )
            }
          }}
        />
        <Stack.Screen name='Tickets' component={Details}
          options={{
            headerTransparent: true,
            headerTitleStyle: {
              fontFamily: 'Gilory',
              fontSize: 30,
              color: 'white',
              letterSpacing: 1
            },
            headerLeft: (props) => {
              return (

                <Ionicons
                  style={{
                    left: 10,

                  }}
                  {...props}
                  name="chevron-back-sharp" size={30} color="white" />
              )
            },
            headerRight: () => {
              return (
                <Entypo
                  style={{
                    right: 10,
                  }}
                  name="dots-two-vertical" size={40} color="white" />
              )
            }
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e8e8ef',
  },
  containerHome: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
