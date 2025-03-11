/* global api */
class amiszh_NewAmisMoedict {
    constructor(options) {
        this.options = options;
    }

    async displayName() {
        let locale = await api.locale();
        if (locale.indexOf('CN') != -1) return '阿美語萌典 (線上)';
        if (locale.indexOf('TW') != -1) return '阿美語萌典 (線上)';
        return 'New Amis Moedict (Online)';
    }

    setOptions(options) {
        this.options = options;
    }

    async findTerm(word) {
        console.log("Finding term:", word);
        return this.findAmisWord(word);
    }

    async findAmisWord(word) {
        console.log("Starting findAmisWord for:", word);
        let notes = [];

        if (!word) {
            console.log("No word provided");
            return notes;
        }

        // 直接返回靜態結果，跳過 fetch 和解析
        const definitions = [
            `<div class="dict-name">測試字典</div>`,
            `<span class="term-info">這是測試資料</span>`,
            `<ol class="definitions"><li>測試定義：${word}</li></ol>`
        ];

        const css = this.renderCSS();
        notes.push({
            css,
            expression: word,
            reading: "",
            extrainfo: "",
            definitions,
            audios: []
        });
        console.log("Returning notes:", notes);
        return notes;
    }

    renderCSS() {
        return `
            <style>
                .dict-name {font-weight: bold; color: #ffffff; background-color: #0d47a1; padding: 4px 8px; margin-bottom: 5px; border-radius: 3px;}
                .term-info {font-size: 0.9em; color: #6b7280; display: block; margin-bottom: 5px;}
                ol.definitions {list-style-type: decimal; margin-left: 20px; padding-left: 0;}
                li {margin-bottom: 10px;}
            </style>`;
    }
}
