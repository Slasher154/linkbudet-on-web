/**
 * Created by Dome on 6/9/14 AD.
 */


Meteor.methods({
    export_excel: function(){
        var fs = Meteor.require('fs');
        var path = Meteor.require('path');
        var nodeExcel = Meteor.require('excel-export');
        var mypath = path.join(path.resolve("."),"../client/app/");
        var conf ={};
        conf.stylesXmlFile = mypath + "link_files/styles.xml";
        conf.cols = [{
            caption:'string',
            type:'string',
            beforeCellWrite:function(row, cellData){
                return cellData.toUpperCase();
            },
            width:28.7109375
        },{
            caption:'date',
            type:'date',
            beforeCellWrite:function(){
                var originDate = new Date(Date.UTC(1899,11,30));
                return function(row, cellData, eOpt){
                    if (eOpt.rowNum%2){
                        eOpt.styleIndex = 1;
                    }
                    else{
                        eOpt.styleIndex = 2;
                    }
                    if (cellData === null){
                        eOpt.cellType = 'string';
                        return 'N/A';
                    } else
                        return (cellData - originDate) / (24 * 60 * 60 * 1000);
                }
            }()
        },{
            caption:'bool',
            type:'bool'
        },{
            caption:'number',
            type:'number'
        }];
        conf.rows = [
            ['pi', new Date(Date.UTC(2013, 4, 1)), true, 3.14],
            ["e", new Date(2012, 4, 1), false, 2.7182],
            ["M&M<>'", new Date(Date.UTC(2013, 6, 9)), false, 1.61803],
            ["null date", null, true, 1.414]
        ];
        var result = nodeExcel.execute(conf);
        console.log(JSON.stringify(result));
        console.log("Resolved path = " + path.resolve("."));


        fs.writeFile(mypath + "test.xlsx", result, 'binary', function(err) {
            if (err) {
                throw (new Meteor.Error(500, 'Failed to save file.', err));
            } else {
                console.log('The file ' + 'test.xlsx' + ' (' + 'binary' + ') was saved.');
            }
        });


        console.log(mypath);
        //fs.writeFileSync(mypath + 'mymsg.txt', 'Hello node', 'binary');
        //console.log(Assets.getText('mydata.txt'));
        return result;
    }
})