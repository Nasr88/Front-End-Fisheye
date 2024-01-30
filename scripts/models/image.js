import media from "./media.js";
export default  class image extends media{
    constructor(_obj)
    {
        super(_obj);
        this.image = _obj.image;
    }
}