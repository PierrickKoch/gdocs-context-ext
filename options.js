var DEFAULT_DOCS = "ai,doc,docx,dxf,eps,fnt,fon,odt,otf,pages,pdf,pps,ppt,pptx,ps,psd,svg,tif,tiff,ttf,xls,xlsx,xps";
var SEPARATOR = ",";//"|";
function isFirstRun() {
  return localStorage["docext"] == undefined;
}
function setDefaultOptions() {
  localStorage["docext"] = DEFAULT_DOCS;
}
function getTypes() {
  if (isFirstRun()) {
    setDefaultOptions();
  }
  return localStorage["docext"];
}
function getTypesList() {
  return getTypes().split(SEPARATOR);
}
// handle mistyping and store the options
function setTypes(types) {
  var tmp = types.trim().replace(/ /g,SEPARATOR).replace(/;/g,SEPARATOR);
  while (tmp.indexOf(",,")!=-1) {
    tmp = tmp.replace(/,,/g,SEPARATOR);
  }
  // test if we begin or end with ','
  if (tmp.indexOf(SEPARATOR) == 0) {
    tmp = tmp.substr(1);
  }
  if (tmp.lastIndexOf(SEPARATOR) == tmp.length-1) {
    tmp = tmp.substr(0,tmp.length-1);
  }
  uglylist = tmp.toLowerCase().split(SEPARATOR);
  // remove duplicates
  exts = new Array();
  for (i = 0; i < uglylist.length; i++) {
    if (exts.indexOf(uglylist[i]) == -1) {
      exts.push(uglylist[i])
    }
  }
  localStorage["docext"] = exts.sort().join(SEPARATOR);
  return localStorage["docext"];
}

