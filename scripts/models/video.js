import media from "./media.js";
export default  class video extends media{
    constructor(_obj)
    {
        super(_obj);
        this.video = _obj.video;

    }
}