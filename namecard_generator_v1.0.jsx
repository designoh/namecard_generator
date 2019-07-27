#include json2.js

var userData;
var w = new Window("dialog", "명함 정보 입력하기", undefined, {closeButton: true});
var dialog = w.add("statictext", undefined, "명함에 들어갈 정보를 넣어주세요.");

var userInput = w.add("edittext", [0,0,500,500], "", {multiline: true, wantReturn: true});
userInput.active = true;

var contact = w.add("statictext", undefined, "버그 제보 및 개선 문의: designoh_b@naver.com");

var btnGroup = w.add("group");
var importBtn = btnGroup.add("button", undefined, "입력");
var closeBtn = btnGroup.add("button", undefined, "닫기");

closeBtn.onClick = function() {
    w.close();
}

importBtn.onClick = function() {
    var doc = app.activeDocument;
    var result = csvJSON(userInput.text);
    var obj = JSON.parse(result);
    var atbNum = obj.length;

    if (doc.artboards.length == 1) {
        dup_atb_single(atbNum);
        changeText(obj);
        w.close();
        alert('정보가 성공적으로 입력되었습니다.');
    } else if (doc.artboards.length == 2) {
        dup_atb_double(atbNum);
        changeText(obj);
        w.close();
        alert('정보가 성공적으로 입력되었습니다.');
    } else {
        alert('아트보드를 1개 혹은 2개만 남긴 후 다시 시도해주세요.');
    }

}

w.show();


function dup_atb_single(atbNum){
    var doc = app.activeDocument;

    var board = doc.artboards[doc.artboards.length - 1];
    var rect = board.artboardRect;
    
    var row = parseInt(atbNum/10);
    var column = (atbNum%10);

    app.activeDocument.artboards.setActiveArtboardIndex(doc.artboards.length - 1);
    doc.selectObjectsOnActiveArtboard();
    app.copy();

    for (i = 0; i < row; i++) {
        for(j = 2; j < 12; j++) {
            var offset = 20;
            var newRect = [
                j * (rect[2] - rect[0] + offset),
                i * (rect[3] - rect[1] - offset),
                j * (rect[2] - rect[0] + offset) + rect[2] - rect[0],
                i * (rect[3] - rect[1] - offset) + rect[3] - rect[1]
            ];

            var newBoard = doc.artboards.add(newRect);
            newBoard.name = board.name + (i + 1) + "-" + j;
            app.executeMenuCommand("pasteBack");
        }
    }

    for (i = 2; i < column + 2; i++) {
        var offset = 20;
        var newRect = [
            i * (rect[2] - rect[0] + offset),
            row * (rect[3] - rect[1] - offset),
            i * (rect[2] - rect[0] + offset) + rect[2] - rect[0],
            row * (rect[3] - rect[1] - offset) + rect[3] - rect[1]
        ];
        var newBoard = doc.artboards.add(newRect);
        
        newBoard.name = board.name + (row + 1) + "-" + i;
        app.executeMenuCommand("pasteBack");
    }

    app.activeDocument.artboards.setActiveArtboardIndex(0);
    doc.selectObjectsOnActiveArtboard();
    app.cut();
    app.activeDocument.artboards[0].remove();
    doc.selection = null;
}

function dup_atb_double(atbNum){
    var doc = app.activeDocument;
    var boardA = doc.artboards[doc.artboards.length - 2];
    var rectA = boardA.artboardRect;
    var boardB = doc.artboards[doc.artboards.length - 1];
    var rectB = boardB.artboardRect;

    var row = parseInt(atbNum/5);
    var column = (atbNum%5);

    for(i = 0; i < row; i++) {
        for(j = 2; j < 7; j++) {
            app.activeDocument.artboards.setActiveArtboardIndex(0);
            doc.selectObjectsOnActiveArtboard();
            app.copy();

            var offset = 20;
            var newRectA = [
                (j - 1) * 2 * (rectB[2] - rectB[0] + offset),
                i * (rectB[3] - rectB[1] - offset),
                (j - 1) * 2 * (rectB[2] - rectB[0] + offset) + rectB[2] - rectB[0],
                i * (rectB[3] - rectB[1] - offset) + rectB[3] - rectB[1]
            ];

            var newBoardA = doc.artboards.add(newRectA);
            newBoardA.name = boardA.name + " copy";
            app.executeMenuCommand("pasteBack");
            doc.selection = null;

            app.activeDocument.artboards.setActiveArtboardIndex(1);
            doc.selectObjectsOnActiveArtboard();
            app.copy();

            var newRectB = [
                ((j - 1) * 2 + 1 ) * (newRectA[2] - newRectA[0] + offset),
                i * (newRectA[3] - newRectA[1] - offset),
                ((j - 1) * 2 + 1 ) * (newRectA[2] - newRectA[0] + offset) + newRectA[2] - newRectA[0],
                i * (newRectA[3] - newRectA[1] - offset) + newRectA[3] - newRectA[1]            
            ]

            var newBoardB = doc.artboards.add(newRectB);
            newBoardB.name = boardB.name + " copy";
            app.executeMenuCommand("pasteBack");
        }
    }

    for (i = 2; i < column + 2; i++) {
        app.activeDocument.artboards.setActiveArtboardIndex(0);
            doc.selectObjectsOnActiveArtboard();
            app.copy();

            var offset = 20;
            var newRectA = [
                (i - 1) * 2 * (rectB[2] - rectB[0] + offset),
                row * (rectB[3] - rectB[1] - offset),
                (i - 1) * 2 * (rectB[2] - rectB[0] + offset) + rectB[2] - rectB[0],
                row * (rectB[3] - rectB[1] - offset) + rectB[3] - rectB[1]
            ];

            var newBoardA = doc.artboards.add(newRectA);
            newBoardA.name = boardA.name + " copy";
            app.executeMenuCommand("pasteBack");
            doc.selection = null;

            app.activeDocument.artboards.setActiveArtboardIndex(1);
            doc.selectObjectsOnActiveArtboard();
            app.copy();

            var newRectB = [
                ((i - 1) * 2 + 1 ) * (newRectA[2] - newRectA[0] + offset),
                row * (newRectA[3] - newRectA[1] - offset),
                ((i - 1) * 2 + 1 ) * (newRectA[2] - newRectA[0] + offset) + newRectA[2] - newRectA[0],
                row * (newRectA[3] - newRectA[1] - offset) + newRectA[3] - newRectA[1]
            ]

            var newBoardB = doc.artboards.add(newRectB);
            newBoardB.name = boardB.name + " copy";
            app.executeMenuCommand("pasteBack");
    }    

    for (i = 0; i < 2; i++) {
        app.activeDocument.artboards.setActiveArtboardIndex(0);
        doc.selectObjectsOnActiveArtboard();
        app.cut();
        app.activeDocument.artboards[0].remove();
    }
    
    doc.selection = null;
}


//Change text
function changeText(data) {
    for (i = 0; i < data.length; i++) {
        //한글 이름
        try {
            var nameKorLayer = app.activeDocument.layers.getByName("nameKor"); 
            nameKorLayer.textFrames[i].contents = data[i].nameKor;        
        } catch (e) {}

        //영어 이름
        try {
            var nameEngLayer = app.activeDocument.layers.getByName("nameEng");
            nameEngLayer.textFrames[i].contents = data[i].nameEng;
        } catch (e) {}

        //직무
        try {
            var jobLayer = app.activeDocument.layers.getByName("job");
            jobLayer.textFrames[i].contents = data[i].job;        
        } catch (e) {}

        //직급
        try {
            var positionLayer = app.activeDocument.layers.getByName("position");
            positionLayer.textFrames[i].contents = data[i].position;        
        } catch (e) {}

        //부서
        try {
            var teamLayer = app.activeDocument.layers.getByName("team");
            teamLayer.textFrames[i].contents = data[i].team;    
        } catch (e) {}

        //핸드폰 번호
        try {
            var mobileLayer = app.activeDocument.layers.getByName("mobile");
            mobileLayer.textFrames[i].contents = data[i].mobile;        
        } catch (e) {}

        //유선전화 번호
        try {
            var faxLayer = app.activeDocument.layers.getByName("fax");
            faxLayer.textFrames[i].contents = data[i].fax;
        } catch (e) {}

        //이메일
        try {
            var emailLayer = app.activeDocument.layers.getByName("email");
            emailLayer.textFrames[i].contents = data[i].email;      
        } catch (e) {}

        //팩스
        try {
            var faxLayer = app.activeDocument.layers.getByName("fax");
            faxLayer.textFrames[i].contents = data[i].fax;
        } catch (e) {}
    }
}

function csvJSON(csv){
    var lines=csv.split("\n");
    var result = [];
    var headers=lines[0].split("	");
    for(var i=1;i<lines.length;i++){
        var obj = {};
        var currentline=lines[i].split("	");
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
    //return result; //JavaScript object
    return JSON.stringify(result); //JSON
}
