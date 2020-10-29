docker run --name slogx -d --rm  -m 1G -p 80:3000 -v /opt/Siblink/Linksrv.log:/Linksrv.log:ro -e TZ="America/Argentina/Buenos_Aires" itservicegvillarroel/slogx:v1.0
