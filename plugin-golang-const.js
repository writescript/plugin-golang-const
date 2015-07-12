writeln('package main');
writeln('')
writeln('const (')
for(var k in data) {
  writeln('\t'+k+' = "'+data[k]+'"')
}
writeln(')')
