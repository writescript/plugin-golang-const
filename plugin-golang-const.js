// check if a const name contains a dash/dashes and replace it with an underline/underlines
function createConstName(d) {
  return d.replace(/-/g, '_');
}

// check the value type and put double quotes around if it is a string
function createConstValue(d) {
  var value = '';
  var theType = typeof d;
  if(theType === 'number' || theType === 'boolean') {
      value = d;
  } else {
    value = '"'+d+'"';
  }
  return value;
}

// create all the constant variables
function createConsts(d) {
  if(d.lenght !== 0) {
    writeln('const (');
    pushLevel();
    for(var k in d) {
      if(k != 'package' && k != 'PACKAGE') {
        writeln(createConstName(k)+' = '+createConstValue(d[k]));
      }
    }
    popLevel();
    writeln(')');
  }
}

writeln('// plugin-golang-const v0.1.0')
writeln()
var packageName = data.package || data.PACKAGE || 'main';
writeln('package '+packageName);
writeln();
if(data !== undefined) {
  if(data.const !== undefined) {
    createConsts(data.const);
  } else if(data.CONST !== undefined) {
    createConsts(data.CONST);
  } else {
    createConsts(data);
  }
}
