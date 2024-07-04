var noSameQuote = -1; 

function getTheQuote() {
    var quotes = [
        { text: " .ان غاب القط العب يا فار", author: "واحد مصرى" },
        { text: "  .^_^ القرد فى عين امه غزال  ", author: "واحد من الناس" },
        { text: "  .ضربوا الاعور على عينه قال خربانه خربانه ", author: "ده جيرانى عادى" },
        { text: " .خاف من عدوك مره ومن صديقك ألف مره  ", author: "واحد على اول شارعنا" },
        { text: "اجرى يا بنى ادم جرى الوحوش ان كبر ابنك خاويه.", author: "العبد لله" },
        { text: " .اللى ياكل الفول يمشى عرض و طول و اللى ياكل كباب يبقى ورا الباب", author: "اللى كاره الفول" },
        { text: " .على قد لحافك مد رجليك", author: "اللى ممعهوش فلوس" },
        { text: " انا واخويا على ابن عمى وانا وابن عمى على الغريب ", author: "اخويا " },
        { text: "الوقت كالسيف ان لم تقطعه تأتى الصفح بما لا تشتهى الانفس .", author: "اللمبى" },
        { text: " .أكل و مرعا و قلة صنعه ", author: "اجدادنا" }
    ];

    var randomIndex;

    
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === noSameQuote);

    var randomQuote = quotes[randomIndex];

    document.getElementById('quote').innerHTML = randomQuote.text;
    document.getElementById('author').innerHTML = '-- ' + randomQuote.author;

    noSameQuote = randomIndex; 
}