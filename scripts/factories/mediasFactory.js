import image from '../models/image.js'
import video from '../models/video.js'

export default class mediasFactory {
    constructor(_data){
        if (_data.image) 
            return new image(_data);
        else if (_data.video)
            return new video(_data);
        else throw 'Unknown data type'
    }
}