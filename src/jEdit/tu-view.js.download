function gotoshare() {
    window.location = "/Surveys/pushlish/" + surveryid;
    window.location = "/Surveys/Form/" + surveryid;
}
function gotopreview() {
    window.location ="/Surveys/Preview/" + surveryid;
}

function updateSurveyData() {
    document.getElementById("form-survey").submit();
    var str;
    var con = confirm("Confirm save the change?");
    if (con)
    {
        $.ajax({
            url: "/Surveys/updateSurvey",
            type: 'POST',
            async: false,
            contentType: "application/json; charset=utf-8",
            dataType: "text",
            processData: true,
            data: JSON.stringify({ id: surveryid, json: ko.toJSON(survey1) }),
            success: function (data)
            {
                str = data;
            },
            failure: function (data)
            {
                alert("Fail " + data);
            }

        });
    }
    
    return str;
}

function ObjectKoQuestion(question)
{
    var row = [];
    var column = [];
    question.row.forEach(function (r)
    {
        row.push({
            svalue: ko.observable(r.svalue)
        });
    });
    question.column.forEach(function (c)
    {
        column.push({
            svalue: ko.observable(c.svalue)
        });
    });
    var pself = {
        qid: question.qid,
        btype: question.btype,
        qtype: ko.observable(question.qtype),
        title: ko.observable(question.title),
        useshortdescription: ko.observable(question.useshortdescription),
        shortdescription: ko.observable(question.shortdescription),
        isrequired: ko.observable(question.isrequired),
        nextpagedetect: ko.observable(question.nextpagedetect),
        isscored: ko.observable(question.isscored),
        row: ko.observableArray(row),
        column: ko.observableArray(column),
        choices: ko.observableArray(obsChoices(question.choices)),
        requiredcontent: ko.observable(obsrequiredcontent(question.requiredcontent)),
        inedit: ko.observable(false),
        autofixscore: function (data) {
            console.log(data);
        },
        showoption: ko.pureComputed(function () {
            return (pself.isscored() || pself.nextpagedetect());
        }),
        addchoice: function () {
            pself.choices();
            this.choices.push({
                choice_value: ko.observable('new option'), nextpage: ko.observable(-1), score: ko.observable(0),
                autofixscore: function () {
                    if (this.score() === "") {
                        this.score(0);
                    }
                }
            });
        },
        addrow: function () {
            this.row.push({
                svalue: ko.observable("New row")
            });
        },
        addcolumn: function () {
            this.column.push({
                svalue: ko.observable("New column")
            });
        },
        removechoice: function () {
            console.log(pself.choices());
            pself.choices.remove(this);
        },

        removerow: function () {
            pself.row.remove(this);
        },
        removecolumn: function () {
            pself.column.remove(this);
        }

    };
    return pself;
}

function ObjectKoPage(page)
{
    var pshortdescription = page.shortdescription;
    var ptitle = page.page_title;
    var temp_questions = [];
    var doafter = page.doafter;
    page.questions.forEach(function (question) {
        temp_questions.push(ObjectKoQuestion(question));
    })
    var pself = {};
    pself.page_title = ko.observable(ptitle);
    pself.questions = ko.observableArray(temp_questions);
    pself.shortdescription = ko.observable(pshortdescription);
    pself.doafter = ko.observable(doafter);
    pself.removeQuestion = function () {
        pself.questions.remove(this);
    }
    return pself;
}


//var surveyjsonst = getSurveyDatajson()+ "";
//var surveyjson = JSON.parse(getSurveyDatajson() + "");


function ObjectKoSurveyData(sjson) {
    var sid = sjson.index;
    var sname = sjson.sname;
    var nextqid = sjson.nextqid;
    var sshortdescription = sjson.shortdescription;
    var i = 0;
    var spagenumbers = [];
    var spages = [];
    sjson.pages.forEach(function (page) {
        spages.push(ObjectKoPage(page));
        spagenumbers.push(i++);
    });
    var tself = {};
    tself.nextqid = nextqid;
    tself.index = ko.observable(sid);
    tself.sname = ko.observable( sname );
    tself.shortdescription = ko.observable(sshortdescription);
    tself.pages = ko.observableArray(spages);
    tself.pagenumbers = spagenumbers;
    tself.removePage = function () {
        tself.pages.remove(this);
    };
    tself.addPage = function () {
        tself.pages.push(ObjectKoPage({ page_title: "untitle", shortdescription: "", questions: [], doafter:0}));
    };
    return tself;
}
survey1 = ObjectKoSurveyData(JSON.parse(getSurveyDatajson() + ""));

function getCurrentJsonSurveyDataString() {
    return ko.toJSON(survey1);
}


