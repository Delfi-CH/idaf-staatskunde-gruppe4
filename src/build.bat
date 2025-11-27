@echo off
REM Build the Website for publishing
REM Run this in the Repository's src directory

copy index.html ..\docs\index.html
copy index.js ..\docs\index.js
copy index.css ..\docs\index.css

copy ..\pdf_dokument\images\a.o._Gesamterneuerung-d.png ..\docs\img\a.o._Gesamterneuerung-d.png
copy ..\pdf_dokument\images\Genehmigung_Staatsvertraege-d.png ..\docs\img\Genehmigung_Staatsvertraege-d.png

copy ..\pdf_dokument\einfuehrungskurs_legislative.pdf ..\docs\files\einfuehrungskurs_legislative.pdf

echo Files copied successfully.
pause
