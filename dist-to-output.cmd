REM %1 --> VERSION.
REM Example: buildmotion-component-%1 becomes buildmotion-component-1.0.0
xcopy dist\*.* ..\..\output\buildmotion-component\buildmotion-component-%1\ /s