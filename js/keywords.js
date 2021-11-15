export default class Keyword {
  static keywords = new Array();

  static start = () => {
    document.onkeydown = this.saveKey;
  };

  static saveKey = (e = KeyboardEvent) => {
    this.keywords.push(e.key);
    console.log(this.keywords);
  };

  static keyPressed = (codeKey) => {
    return this.keywords.indexOf(codeKey) !== -1 ? true : false;
  };

  static resetKeywords = () => {
    this.keywords = new Array();
  };
}
