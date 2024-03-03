import React, { useRef, useState, useEffect } from 'react'
import { View, Text, StatusBar, TouchableOpacity, FlatList, Dimensions, useColorScheme, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import { stepZero, stepOne, stepTwo, stepThree, stepFour } from '../../assets/images';

export function OnBoarding({ buttonBackgroundColor = '', dotBackgroundColor = '', onFinish, buttonIconColor = '' }) {
  const data = [
    {
      _id: '0',
      image: <Image source={stepZero} />
    },
    {
      _id: '1',
      image: <Image source={stepOne} />
    },
    {
      _id: '2',
      image: <Image source={stepTwo} />
    },
    {
      _id: '3',
      image: <Image source={stepThree} />
    },
    {
      _id: '4',
      image: <Image source={stepFour} />
    },
  ]

  const { width, height } = Dimensions.get('window');

  const colorScheme = useColorScheme()

  const SIZES = {
    base: 10,
    width,
    height
  }

  const flatlistRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [viewableItems, setViewableItems] = useState([])

  const handleViewableItemsChanged = useRef(({ viewableItems }) => {
    setViewableItems(viewableItems)
  })
  useEffect(() => {
    if (!viewableItems[0] || currentPage === viewableItems[0].index)
      return;
    setCurrentPage(viewableItems[0].index)

  }, [viewableItems])

  const handleNext = () => {
    if (currentPage == data.length - 1) {
      return;

    }

    flatlistRef.current.scrollToIndex({
      animated: true,
      index: currentPage + 1
    })
  }

  const handleSkipToEnd = () => {
    flatlistRef.current.scrollToIndex({
      animate: true,
      index: data.length - 1
    })
  }

  const renderBottomSection = () => {
    return (
      <SafeAreaView>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: SIZES.base * 2,
        }}>
          <TouchableOpacity onPress={handleSkipToEnd}>
            <Text style={{
              fontSize: 18,
              color: 'white',
              opacity: currentPage == data.length - 1 ? 0 : 1,
            }}>Pular</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {
              [...Array(data.length)].map((_, index) => (
                <View
                  key={index}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: dotBackgroundColor,
                    marginRight: 8,
                    opacity: index == currentPage
                      ? 1
                      : 0.2
                  }} />
              ))
            }


          </View>

          {
            currentPage != data.length - 1 ? (
              <TouchableOpacity
                onPress={handleNext}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  backgroundColor: dotBackgroundColor,
                }}
                activeOpacity={1}
              >
                <AntDesignIcons
                  name="right"
                  style={{ fontSize: 25, color: 'white' }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={{
                paddingHorizontal: SIZES.base * 2,
                height: 60,
                borderRadius: 30,
                backgroundColor: dotBackgroundColor,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
                onPress={onFinish}
              >
                <Text style={{
                  color: 'white',
                  fontSize: 18,
                  marginLeft: SIZES.base
                }}>Finalizar</Text>
                <AntDesignIcons
                  name="right"
                  style={{ fontSize: 25, color: 'white'}}
                />
              </TouchableOpacity>
            )
          }

        </View>
      </SafeAreaView>
    )
  }

  const renderFlatlistItem = ({ item }) => {
    return (
      <View style={{
        width: SIZES.width,
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: '100%'
      }}
      >
        <View style={{
          alignItems: 'center',
          // width: '100%'
          // marginVertical: SIZES.base * 2
        }}>
          {item.image}
        </View>

      </View>
    )
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center'
    }}>

      <FlatList
        data={data}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item._id}
        renderItem={renderFlatlistItem}
        ref={flatlistRef}
        onViewableItemsChanged={handleViewableItemsChanged.current}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 10 }}
        initialNumToRender={1}
        extraData={SIZES.width}
        bounces={false}

      />

      {renderBottomSection()}

    </View>
  )
}