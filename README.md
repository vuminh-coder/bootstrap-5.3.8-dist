"# bootstrap-5.3.8-dist
code --list-extensions > extensions.txt
Get-Content extensions.txt | ForEach-Object { code --install-extension $_ }
" 
