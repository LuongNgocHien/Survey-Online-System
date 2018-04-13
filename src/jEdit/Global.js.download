function newMultiple() {
    var pself = {
        qid: survey1.nextqid,
        btype: 'bmultiple',
        qtype: ko.observable('qmultiple'),
        title: ko.observable('New Multiple'),
        useshortdescription: ko.observable(false),
        shortdescription: ko.observable(""),
        isrequired: ko.observable(false),
        row: ko.observableArray([]),
        column: ko.observableArray([]),
        nextpagedetect: ko.observable(false),
        isscored: ko.observable(false),
        removechoice: function ()
        {
            pself.choices.remove(this);
        },
        removerow: function ()
        {
            pself.row.remove(this);
        },
        removecolumn: function ()
        {
            pself.column.remove(this);
        },
        choices: ko.observableArray(obsChoices([
            {
                choice_value: 'Option 1',
                nextpage: -1,
                score: 0
            }])),
        addchoice: function ()
        {
            this.choices.push({
                choice_value: ko.observable('new option'), nextpage: ko.observable(-1), score: ko.observable(0),
                autofixscore: function () {
                    if (this.score() === "") {
                        this.score(0);
                    }   
                }
            });
        },
        addrow: function ()
        {
            this.row.push({
                svalue: ko.observable("New row")
            });
        },
        addcolumn: function ()
        {
            this.column.push({
                svalue: ko.observable("New column")
            });
        },

        requiredcontent: ko.observable(obsrequiredcontent({
            inputtype: "text",
            used: false,
            min: 0,
            max: 100,
            nmin: 0,
            nmax: 100,
            step: 1,
            minday: "",
            maxday: "",
            must: [],
            mustnot: []
        })),
        inedit: ko.observable(false)
    };
    return pself;
}


function newCheckbox()
{
    var pself = {
        qid: survey1.nextqid,
        btype: 'bcheckbox',
        qtype: ko.observable('qcheckbox'),
        title: ko.observable('New Check Box'),
        useshortdescription: ko.observable(false),
        shortdescription: ko.observable(""),
        isrequired: ko.observable(false),
        row: ko.observableArray([]),
        column: ko.observableArray([]),
        nextpagedetect: ko.observable(false),
        isscored: ko.observable(false),
        removechoice: function ()
        {
            pself.choices.remove(this);
        },
        removerow: function ()
        {
            pself.row.remove(this);
        },
        removecolumn: function ()
        {
            pself.column.remove(this);
        },
        choices: ko.observableArray(obsChoices([
            {
                choice_value: 'Option 1',
                nextpage: -1,
                score: 0
            }])),
        addchoice: function ()
        {
            this.choices.push({
                choice_value: ko.observable('new option'), nextpage: ko.observable(-1), score: ko.observable(0),
                autofixscore: function () {
                    if (this.score() === "") {
                        this.score(0);
                    }
                }
            });
        },
        addrow: function ()
        {
            this.row.push({
                svalue: ko.observable("New row")
            });
        },
        addcolumn: function ()
        {
            this.column.push({
                svalue: ko.observable("New column")
            });
        },

        requiredcontent: ko.observable(obsrequiredcontent({
            inputtype: "text",
            used: false,
            min: 0,
            max: 100,
            nmin: 0,
            nmax: 100,
            step: 1,
            minday: "",
            maxday: "",
            must: [],
            mustnot: []
        })),
        inedit: ko.observable(false)
    };
    return pself;
}

function newMatrix1()
{
    var pself = {
        qid: survey1.nextqid,
        btype: 'bmatrix1',
        qtype: ko.observable('qmatrix1'),
        title: ko.observable('New Matrix'),
        useshortdescription: ko.observable(false),
        shortdescription: ko.observable(""),
        isrequired: ko.observable(false),
        row: ko.observableArray(obsrow([
            { svalue: 'row1' }, { svalue: 'row2' }
        ])),
        column: ko.observableArray(obscolumn([
            { svalue: 'column1' }, { svalue: 'column2' }, { svalue: 'column3'}
        ])),
        nextpagedetect: ko.observable(false),
        isscored: ko.observable(false),
        choices: ko.observableArray(obsChoices([
            {
                choice_value: 'Option 1',
                nextpage: -1,
                score: 0
            }])),
        addchoice: function ()
        {
            this.choices.push({
                choice_value: ko.observable('new option'), nextpage: ko.observable(-1), score: ko.observable(0),
                autofixscore: function () {
                    if (this.score() === "") {
                        this.score(0);
                    }
                }
            });
        },
        addrow: function ()
        {
            this.row.push({
                svalue: ko.observable("New row")
            });
        },
        addcolumn: function ()
        {
            this.column.push({
                svalue: ko.observable("New column")
            });
        },
        removechoice: function ()
        {
            pself.choices.remove(this);
        },
        removerow: function ()
        {
            console.log(pself.row());
            console.log(this);
            pself.row.remove(this);
        },
        removecolumn: function ()
        {
            pself.column.remove(this);
        },
        requiredcontent: ko.observable(obsrequiredcontent({
            inputtype: "text",
            used: false,
            min: 0,
            max: 100,
            nmin: 0,
            nmax: 100,
            step: 1,
            minday: "",
            maxday: "",
            must: [],
            mustnot: []
        })),
        inedit: ko.observable(false)
    };
    return pself;
}


function newMatrix3()
{
    var pself = {
        qid: survey1.nextqid,
        btype: 'bmatrix3',
        qtype: ko.observable('qmatrix3'),
        title: ko.observable('New Matrix'),
        useshortdescription: ko.observable(false),
        shortdescription: ko.observable(""),
        isrequired: ko.observable(false),
        row: ko.observableArray(obsrow([
            { svalue: 'row1' }, { svalue: 'row2' }
        ])),
        column: ko.observableArray(obscolumn([
            { svalue: 'column1' }, { svalue: 'column2' }, { svalue: 'column3' }
        ])),
        nextpagedetect: ko.observable(false),
        isscored: ko.observable(false),
        choices: ko.observableArray(obsChoices([
            {
                choice_value: 'Option 1',
                nextpage: -1,
                score: 0
            }])),
        addchoice: function ()
        {
            this.choices.push({
                choice_value: ko.observable('new option'), nextpage: ko.observable(-1), score: ko.observable(0),
                autofixscore: function () {
                    if (this.score() === "") {
                        this.score(0);
                    }
                }
            });
        },
        addrow: function ()
        {
            this.row.push({
                svalue: ko.observable("New row")
            });
        },
        addcolumn: function ()
        {
            this.column.push({
                svalue: ko.observable("New column")
            });
        },
        removechoice: function ()
        {
            pself.choices.remove(this);
        },
        removerow: function ()
        {
            console.log(pself.row());
            console.log(this);
            pself.row.remove(this);
        },
        removecolumn: function ()
        {
            pself.column.remove(this);
        },
        requiredcontent: ko.observable(obsrequiredcontent({
            inputtype: "text",
            used: false,
            min: 0,
            max: 100,
            nmin: 0,
            nmax: 100,
            step: 1,
            minday: "",
            maxday: "",
            must: [],
            mustnot: []
        })),
        inedit: ko.observable(false)
    };
    return pself;
}


function newMatrix2()
{
    var pself = {
        qid: survey1.nextqid,
        btype: 'bmatrix2',
        qtype: ko.observable('qmatrix2'),
        title: ko.observable('New Matrix'),
        useshortdescription: ko.observable(false),
        shortdescription: ko.observable(""),
        isrequired: ko.observable(false),
        row: ko.observableArray(obsrow([
            { svalue: 'row1' }, { svalue: 'row2' }
        ])),
        column: ko.observableArray(obscolumn([
            { svalue: 'column1' }, { svalue: 'column2' }, { svalue: 'column3' }
        ])),
        nextpagedetect: ko.observable(false),
        isscored: ko.observable(false),
        choices: ko.observableArray(obsChoices([
            {
                choice_value: 'Option 1',
                nextpage: -1,
                score: 0
            }])),
        addchoice: function ()
        {
            this.choices.push({
                choice_value: ko.observable('new option'), nextpage: ko.observable(-1), score: ko.observable(0),
                autofixscore: function () {
                    if (this.score() === "") {
                        this.score(0);
                    }
                }
            });
        },
        addrow: function ()
        {
            this.row.push({
                svalue: ko.observable("New row")
            });
        },
        addcolumn: function ()
        {
            this.column.push({
                svalue: ko.observable("New column")
            });
        },
        removechoice: function ()
        {
            pself.choices.remove(this);
        },
        removerow: function ()
        {
            pself.row.remove(this);
        },
        removecolumn: function ()
        {
            pself.column.remove(this);
        },
        requiredcontent: ko.observable(obsrequiredcontent({
            inputtype: "text",
            used: false,
            min: 0,
            max: 100,
            nmin: 0,
            nmax: 100,
            step: 1,
            minday: "",
            maxday: "",
            must: [],
            mustnot: []
        })),
        inedit: ko.observable(false)
    };
    return pself;
}

function obsrequiredcontent(requiredcontent)
{
    var re = requiredcontent.must;
    var ren = requiredcontent.mustnot;
    var mustnws = [];
    var mustws = [];
    re.forEach(function (mw)
    {
        mustws.push({ svalue: ko.observable(mw.svalue) });
    });
    ren.forEach(function (mnw)
    {
        mustnws.push({ value: ko.observable(mnw.svalue) });
    });
    

    var rself = {
        used: ko.observable(requiredcontent.used),
        inputtype: ko.observable(requiredcontent.inputtype),
        isnumber: function ()
        {
            var t = false;
            if (rself.inputtype() === 'number')
            {
                t = true;
            }
            if (rself.inputtype() === 'range')
            {
                t = true;
            }
            return t;
        },
        min: ko.observable(requiredcontent.min),
        max: ko.observable(requiredcontent.max),
        nmin: ko.observable(requiredcontent.nmin),
        nmax: ko.observable(requiredcontent.nmax),
        step: ko.observable(requiredcontent.step),
        minday: ko.observable(requiredcontent.minday),
        maxday: ko.observable(requiredcontent.maxday),
        must: ko.observableArray(mustws),
        mustnot: ko.observableArray(mustnws),
        addbanned: function ()
        {
            rself.mustnot.push({ svalue: ko.observable("some think")});
        },
        addmust: function ()
        {
            rself.must.push({ svalue: ko.observable("some think")});
        },
        removebanned: function ()
        {
            rself.mustnot.remove(this);
        },
        removemust: function ()
        {
            rself.must.remove(this);
        },
        autofixnmin: function () {
            if (this.nmin() === '') {
                this.nmin(-9007199254740991);
            }
        },
        autofixnmax: function () {
            if (this.nmax()===''){
                this.nmax(9007199254740992);
            }
        },
        autofixmin: function () {
            if (this.min() === '') {
                this.min(0);
            }
        },
        autofixmax: function () {
            if (this.max() === '') {
                this.max(9007199254740992);
            }
        },
        autofixstep: function () {
            if (this.step() === '') {
                this.step(1);
            }
        }
    };
    return rself;
}
function newDropdown() {
    var pself = {
        qid: survey1.nextqid,
        btype: 'bdropdown',
        qtype: ko.observable('qdropdown'),
        title: ko.observable('New Dropdown'),
        useshortdescription: ko.observable(false),
        shortdescription: ko.observable(""),
        isrequired: ko.observable(false),
        row: ko.observableArray([]),
        column: ko.observableArray([]),
        nextpagedetect: ko.observable(false),
        isscored: ko.observable(false),
        choices: ko.observableArray(obsChoices([
            {
                choice_value: 'Option 1',
                nextpage: -1,
                score: 0
            }])),
        addchoice: function ()
        {
            this.choices.push({
                choice_value: ko.observable('new option'), nextpage: ko.observable(-1), score: ko.observable(0),
                autofixscore: function () {
                    if (this.score() === "") {
                        this.score(0);
                    }
                }
            });
        },
        addrow: function ()
        {
            this.row.push({
                svalue: ko.observable("New row")
            });
        },
        addcolumn: function ()
        {
            this.column.push({
                svalue: ko.observable("New column")
            });
        },
        removechoice: function ()
        {
            pself.choices.remove(this);
        },
        removerow: function ()
        {
            pself.row.remove(this);
        },
        removecolumn: function ()
        {
            pself.column.remove(this);
        },
        requiredcontent: ko.observable(obsrequiredcontent({
            inputtype: "text",
            used: false,
            min: 0,
            max: 100,
            nmin: 0,
            nmax: 100,
            step: 1,
            minday: "",
            maxday: "",
            must: [],
            mustnot: []
        })),
        inedit: ko.observable(false),
        showoption: ko.pureComputed(function ()
        {
            return (pself.isscored() || pself.nextpagedetect());
        })
    };
    return pself;
}

function newTextbox() {
    var pself = {
        qid: survey1.nextqid,
        btype: 'btextbox',
        qtype: ko.observable('qtextbox'),
        title: ko.observable('New Textbox'),
        useshortdescription: ko.observable(false),
        shortdescription: ko.observable(""),
        isrequired: ko.observable(false),
        row: ko.observableArray([]),
        column: ko.observableArray([]),
        nextpagedetect: ko.observable(false),
        isscored: ko.observable(false),
        choices: ko.observableArray(obsChoices([])),
        addchoice: function ()
        {
            this.choices.push({
                choice_value: ko.observable('new option'), nextpage: ko.observable(-1), score: ko.observable(0),
                autofixscore: function () {
                    if (this.score() === "") {
                        this.score(0);
                    }
                }
            });
        },
        addrow: function ()
        {
            this.row.push({
                svalue: ko.observable("New row")
            });
        },
        addcolumn: function ()
        {
            this.column.push({
                svalue: ko.observable("New column")
            });
        },
        removechoice: function ()
        {
            pself.choices.remove(this);
        },
        removerow: function ()
        {
            pself.row.remove(this);
        },
        removecolumn: function ()
        {
            pself.column.remove(this);
        },
        requiredcontent: ko.observable(obsrequiredcontent({
            inputtype: "text",
            used: false,
            min: 0,
            max: 100,
            nmin: 0,
            nmax: 100,
            step: 1,
            minday: "",
            maxday: "",
            must: [],
            mustnot: []
        })),
        inedit: ko.observable(false),
        showoption: ko.pureComputed(function ()
        {
            return (pself.isscored() || pself.nextpagedetect());
        })
    };
    return pself;
}
function newPharagraph() {
    var pself = {
        qid: survey1.nextqid,
        btype: 'bparagraph',
        qtype: ko.observable('qparagraph'),
        title: ko.observable('New Paragraph'),
        useshortdescription: ko.observable(false),
        shortdescription: ko.observable(""),
        isrequired: ko.observable(false),
        row: ko.observableArray([]),
        column: ko.observableArray([]),
        nextpagedetect: ko.observable(false),
        isscored: ko.observable(false),
        choices: ko.observableArray(obsChoices([])),
        addchoice: function ()
        {
            this.choices.push({
                choice_value: ko.observable('new option'), nextpage: ko.observable(-1), score: ko.observable(0),
                autofixscore: function () {
                    if (this.score() === "") {
                        this.score(0);
                    }
                }
            });
        },
        addrow: function ()
        {
            this.row.push({
                svalue: ko.observable("New row")
            });
        },
        addcolumn: function ()
        {
            this.column.push({
                svalue: ko.observable("New column")
            });
        },
        removechoice: function ()
        {
            pself.choices.remove(this);
        },
        removerow: function ()
        {
            pself.row.remove(this);
        },
        removecolumn: function ()
        {
            pself.column.remove(this);
        },
        requiredcontent: ko.observable(obsrequiredcontent({
            inputtype: "text",
            used: false,
            min: 0,
            max: 100,
            nmin: 0,
            nmax: 100,
            step: 1,
            minday: "",
            maxday: "",
            must: [],
            mustnot: []
        })),
        inedit: ko.observable(false),
        showoption: ko.pureComputed(function ()
        {
            return (pself.isscored() || pself.nextpagedetect());
        })
    };
    return pself;
}
//--------------------------------------------------------------------------------------------------
function newnMultiple() {
    var pself = {
        isdefault: true,
        btype: 'bmultiple',
        qtype: ko.observable('qmultiple'),
        title: ko.observable('New Multiple'),
        useshortdescription: ko.observable(false),
        shortdescription: ko.observable(""),
        isrequired: ko.observable(false),
        row: ko.observableArray([]),
        column: ko.observableArray([]),
        nextpagedetect: ko.observable(false),
        isscored: ko.observable(false),
        choices: ko.observableArray(obsChoices([
            {
                choice_value: 'Option 1',
                nextpage: -1,
                score: 0
            }])),
        addchoice: function ()
        {
            this.choices.push({
                choice_value: ko.observable('new option'), nextpage: ko.observable(-1), score: ko.observable(0),
                autofixscore: function () {
                    if (this.score() === "") {
                        this.score(0);
                    }
                }
            });
        },
        addrow: function ()
        {
            this.row.push({
                svalue: ko.observable("New row")
            });
        },
        addcolumn: function ()
        {
            this.column.push({
                svalue: ko.observable("New column")
            });
        },
        removechoice: function ()
        {
            pself.choices.remove(this);
        },
        removerow: function ()
        {
            pself.row.remove(this);
        },
        removecolumn: function ()
        {
            pself.column.remove(this);
        },
        requiredcontent: ko.observable(obsrequiredcontent({
            inputtype: "text",
            used: false,
            min: 0,
            max: 100,
            nmin: 0,
            nmax: 100,
            step: 1,
            minday: "",
            maxday: "",
            must: [],
            mustnot: []
        })),
        inedit: ko.observable(false),
        showoption: ko.pureComputed(function ()
        {
            return (pself.isscored() || pself.nextpagedetect());
        })
    };
    return pself;
}


function newnCheckbox()
{
    var pself = {
        isdefault: true,
        btype: 'bcheckbox',
        qtype: ko.observable('qcheckbox'),
        title: ko.observable('New Check box'),
        useshortdescription: ko.observable(false),
        shortdescription: ko.observable(""),
        isrequired: ko.observable(false),
        row: ko.observableArray([]),
        column: ko.observableArray([]),
        nextpagedetect: ko.observable(false),
        isscored: ko.observable(false),
        choices: ko.observableArray(obsChoices([
            {
                choice_value: 'Option 1',
                nextpage: -1,
                score: 0
            }])),
        addchoice: function ()
        {
            this.choices.push({
                choice_value: ko.observable('new option'), nextpage: ko.observable(-1), score: ko.observable(0),
                autofixscore: function () {
                    if (this.score() === "") {
                        this.score(0);
                    }
                }
            });
        },
        addrow: function ()
        {
            this.row.push({
                svalue: ko.observable("New row")
            });
        },
        addcolumn: function ()
        {
            this.column.push({
                svalue: ko.observable("New column")
            });
        },
        removechoice: function ()
        {
            pself.choices.remove(this);
        },
        removerow: function ()
        {
            pself.row.remove(this);
        },
        removecolumn: function ()
        {
            pself.column.remove(this);
        },
        requiredcontent: ko.observable(obsrequiredcontent({
            inputtype: "text",
            used: false,
            min: 0,
            max: 100,
            nmin: 0,
            nmax: 100,
            step: 1,
            minday: "",
            maxday: "",
            must: [],
            mustnot: []
        })),
        inedit: ko.observable(false),
        showoption: ko.pureComputed(function ()
        {
            return (pself.isscored() || pself.nextpagedetect());
        })
    };
    return pself;
}

function newnMatrix1()
{
    var pself = {
        isdefault: true,
        btype: 'bmatrix1',
        qtype: ko.observable('qmatrix1'),
        title: ko.observable('New Matrix'),
        useshortdescription: ko.observable(false),
        shortdescription: ko.observable(""),
        isrequired: ko.observable(false),
        row: ko.observableArray(obsrow([
            { svalue: 'row1' }, { svalue: 'row2' }
        ])),
        column: ko.observableArray(obscolumn([
            { svalue: 'column1' }, { svalue: 'column2' }, { svalue: 'column3' }
        ])),
        nextpagedetect: ko.observable(false),
        isscored: ko.observable(false),
        choices: ko.observableArray(obsChoices([
            {
                choice_value: 'Option 1',
                nextpage: -1,
                score: 0
            }])),
        addchoice: function ()
        {
            this.choices.push({
                choice_value: ko.observable('new option'), nextpage: ko.observable(-1), score: ko.observable(0),
                autofixscore: function () {
                    if (this.score() === "") {
                        this.score(0);
                    }
                }
            });
        },
        addrow: function ()
        {
            this.row.push({
                svalue: ko.observable("New row")
            });
        },
        addcolumn: function ()
        {
            this.column.push({
                svalue: ko.observable("New column")
            });
        },
        removechoice: function ()
        {
            pself.choices.remove(this);
        },
        removerow: function ()
        {
            pself.row.remove(this);
        },
        removecolumn: function ()
        {
            pself.column.remove(this);
        },
        requiredcontent: ko.observable(obsrequiredcontent({
            inputtype: "text",
            used: false,
            min: 0,
            max: 100,
            nmin: 0,
            nmax: 100,
            step: 1,
            minday: "",
            maxday: "",
            must: [],
            mustnot: []
        })),
        inedit: ko.observable(false),
        showoption: ko.pureComputed(function ()
        {
            return (pself.isscored() || pself.nextpagedetect());
        })
    };
    return pself;
}
function newnMatrix2()
{
    var pself = {
        isdefault: true,
        btype: 'bmatrix2',
        qtype: ko.observable('qmatrix2'),
        title: ko.observable('New Matrix'),
        useshortdescription: ko.observable(false),
        shortdescription: ko.observable(""),
        isrequired: ko.observable(false),
        row: ko.observableArray(obsrow([
            { svalue: 'row1' }, { svalue: 'row2' }
        ])),
        column: ko.observableArray(obscolumn([
            { svalue: 'column1' }, { svalue: 'column2' }, { svalue: 'column3' }
        ])),
        nextpagedetect: ko.observable(false),
        isscored: ko.observable(false),
        choices: ko.observableArray(obsChoices([
            {
                choice_value: 'Option 1',
                nextpage: -1,
                score: 0
            }])),
        addchoice: function ()
        {
            this.choices.push({
                choice_value: ko.observable('new option'), nextpage: ko.observable(-1), score: ko.observable(0),
                autofixscore: function () {
                    if (this.score() === "") {
                        this.score(0);
                    }
                }
            });
        },
        addrow: function ()
        {
            this.row.push({
                svalue: ko.observable("New row")
            });
        },
        addcolumn: function ()
        {
            this.column.push({
                svalue: ko.observable("New column")
            });
        },
        removechoice: function ()
        {
            pself.choices.remove(this);
        },
        removerow: function ()
        {
            pself.row.remove(this);
        },
        removecolumn: function ()
        {
            pself.column.remove(this);
        },
        requiredcontent: ko.observable(obsrequiredcontent({
            inputtype: "text",
            used: false,
            min: 0,
            max: 100,
            nmin: 0,
            nmax: 100,
            step: 1,
            minday: "",
            maxday: "",
            must: [],
            mustnot: []
        })),
        inedit: ko.observable(false),
        showoption: ko.pureComputed(function ()
        {
            return (pself.isscored() || pself.nextpagedetect());
        })
    };
    return pself;
}
function newnDropdown() {
    var pself = {
        isdefault: true,
        btype: 'bdropdown',
        qtype: ko.observable('qdropdown'),
        title: ko.observable('New Dropdown'),
        useshortdescription: ko.observable(false),
        shortdescription: ko.observable(""),
        isrequired: ko.observable(false),
        row: ko.observableArray([]),
        column: ko.observableArray([]),
        nextpagedetect: ko.observable(false),
        isscored: ko.observable(false),
        choices: ko.observableArray(obsChoices([
            {
                choice_value: 'Option 1',
                nextpage: -1,
                score: 0
            }])),
        addchoice: function ()
        {
            this.choices.push({
                choice_value: ko.observable('new option'), nextpage: ko.observable(-1), score: ko.observable(0),
                autofixscore: function () {
                    if (this.score() === "") {
                        this.score(0);
                    }
                }
            });
        },
        addrow: function ()
        {
            this.row.push({
                svalue: ko.observable("New row")
            });
        },
        addcolumn: function ()
        {
            this.column.push({
                svalue: ko.observable("New column")
            });
        },
        removechoice: function ()
        {
            pself.choices.remove(this);
        },
        removerow: function ()
        {
            pself.row.remove(this);
        },
        removecolumn: function ()
        {
            pself.column.remove(this);
        },
        requiredcontent: ko.observable(obsrequiredcontent({
            inputtype: "text",
            used: false,
            min: 0,
            max: 100,
            nmin: 0,
            nmax: 100,
            step: 1,
            minday: "",
            maxday: "",
            must: [],
            mustnot: []
        })),
        inedit: ko.observable(false),
        showoption: ko.pureComputed(function ()
        {
            return (pself.isscored() || pself.nextpagedetect());
        })
    };
    return pself;
}

function newnTextbox() {
    var pself = {
        isdefault: true,
        btype: 'btextbox',
        qtype: ko.observable('qtextbox'),
        title: ko.observable('New Textbox'),
        useshortdescription: ko.observable(false),
        shortdescription: ko.observable(""),
        isrequired: ko.observable(false),
        row: ko.observableArray([]),
        column: ko.observableArray([]),
        nextpagedetect: ko.observable(false),
        isscored: ko.observable(false),
        choices: ko.observableArray(obsChoices([])),
        addchoice: function ()
        {
            this.choices.push({
                choice_value: ko.observable('new option'), nextpage: ko.observable(-1), score: ko.observable(0),
                autofixscore: function () {
                    if (this.score() === "") {
                        this.score(0);
                    }
                }
            });
        },
        addrow: function ()
        {
            this.row.push({
                svalue: ko.observable("New row")
            });
        },
        addcolumn: function ()
        {
            this.column.push({
                svalue: ko.observable("New column")
            });
        },
        removechoice: function ()
        {
            pself.choices.remove(this);
        },
        removerow: function ()
        {
            pself.row.remove(this);
        },
        removecolumn: function ()
        {
            pself.column.remove(this);
        },
        requiredcontent: ko.observable(obsrequiredcontent({
            inputtype: "text",
            used: false,
            min: 0,
            max: 100,
            nmin: 0,
            nmax: 100,
            step: 1,
            minday: "",
            maxday: "",
            must: [],
            mustnot: []
        })),
        inedit: ko.observable(false),
        showoption: ko.pureComputed(function ()
        {
            return (pself.isscored() || pself.nextpagedetect());
        })
    };
    return pself;
}
function newnPharagraph() {
    var pself = {
        isdefault: true,
        btype: 'bparagraph',
        qtype: ko.observable('qparagraph'),
        title: ko.observable('New Paragraph'),
        useshortdescription: ko.observable(false),
        shortdescription: ko.observable(""),
        isrequired: ko.observable(false),
        row: ko.observableArray([]),
        column: ko.observableArray([]),
        nextpagedetect: ko.observable(false),
        isscored: ko.observable(false),
        choices: ko.observableArray(obsChoices([])),
        addchoice: function ()
        {
            this.choices.push({
                choice_value: ko.observable('new option'),
                nextpage: ko.observable(-1),
                score: ko.observable(0),
                autofixscore: function () {
                    if (this.score() === "") {
                        this.score(0);
                    }
                }
            });
        },
        addrow: function ()
        {
            this.row.push({
                svalue: ko.observable("New row")
            });
        },
        addcolumn: function ()
        {
            this.column.push({
                svalue: ko.observable("New column")
            });
        },
        removechoice: function ()
        {
            pself.choices.remove(this);
        },
        removerow: function ()
        {
            pself.row.remove(this);
        },
        removecolumn: function ()
        {
            pself.column.remove(this);
        },
        requiredcontent: ko.observable(obsrequiredcontent({
            inputtype: "text",
            used: false,
            min: 0,
            max: 100,
            nmin: 0,
            nmax: 100,
            step: 1,
            minday: "",
            maxday: "",
            must: [],
            mustnot: []
        })),
        inedit: ko.observable(false),
        showoption: ko.pureComputed(function ()
        {
            return (pself.isscored() || pself.nextpagedetect());
        })
    };
    return pself;
}
//------------------------------------------------------------------------------------------------

function Task(type) {
    if (type === 'bmultiple') return new newMultiple();
    if (type === 'bcheckbox') return new newCheckbox();
    if (type === 'bdropdown') return new newDropdown();
    if (type === 'btextbox') return new newTextbox();
    if (type === 'bparagraph') return new newPharagraph();
    if (type === 'bmatrix1') return new newMatrix1();
    if (type === 'bmatrix2') return new newMatrix2();


    if (type === 'nbmultiple') return new newnMultiple();
    if (type === 'nbcheckbox') return new newnCheckbox();
    if (type === 'nbdropdown') return new newnDropdown();
    if (type === 'nbtextbox') return new newnTextbox();
    if (type === 'nbparagraph') return new newnPharagraph();
    if (type === 'nbmatrix1') return new newnMatrix1();
    if (type === 'nbmatrix2') return new newnMatrix2();

}

function getSurveyDatajson() {
    var str;
    $.ajax({
        url: "/Surveys/jdit",
        type: 'POST',
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        processData: true,
        data: JSON.stringify({ id: surveryid }),
        success: function (data) {
            str = data;
        },
        failure: function (data) {
            alert("Fail " + data);
        }

    });
    return str;
}

function getSolutionjson() {
    var str;
    $.ajax({
        url: "/Surveys/jsolution",
        type: 'POST',
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        processData: true,
        data: JSON.stringify({ id: surveryid }),
        success: function (data) {
            str = data;
        },
        failure: function (data) {
            alert("Fail " + data);
        }

    });
    return str;
}

function obsChoices(choices)
{
    var temp_choices = [];
    choices.forEach(function (choice)
    {
        var temp_choice = {
            choice_value: ko.observable(choice.choice_value),
            nextpage: ko.observable(choice.nextpage),
            score: ko.observable(choice.score),
            autofixscore: function () {
                if (this.score() === "") {
                    this.score(0);
                }
            }
        };
        temp_choices.push(temp_choice);
    });
    return temp_choices;
}
function obsrow(row)
{
    var srow = [];
    row.forEach(function (r)
    {
        srow.push({
            svalue: ko.observable(r.svalue)
        });
    });
    return srow;
}
function obscolumn(col)
{
    var scol = [];
    col.forEach(function (r)
    {
        scol.push({
            svalue: ko.observable(r.svalue)
        });
    });
    return scol;
}
