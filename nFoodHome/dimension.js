import { Dimensions , PixelRatio} from "react-native";

const {width,height} = Dimensions.get('window');

const widthToDp = (widthNumber) => {
    let givenWidth = typeof widthNumber === 'number' ? widthNumber: parseFloat(widthNumber);
    return PixelRatio.roundToNearestPixel((width * givenWidth)/100);
}

const heightToDp = (heightNumber) => {
    let givenHeight = typeof heightNumber === 'number' ? heightNumber: parseFloat(heightNumber);
    return PixelRatio.roundToNearestPixel((height * givenHeight)/100);
}

export {widthToDp,heightToDp};