export default class Skill {
    _modal_content: string;
    _file_src: string;
    _img_width: string;
    _img_height: string;

    set modal_content(value) {
        this._modal_content = value;
    }
    set file_src(value) {
        this._file_src = value;
    }
    set img_width(value) {
        this._img_width = value;
    }
    set img_height(value) {
        this._img_height = value;
    }

    get modal_content() {
        return this._modal_content;
    }
    get file_src() {
        return this._file_src;
    }
    get img_width() {
        return this._img_width;
    }
    get img_height() {
        return this._img_height;
    }
}