# Setup
Clone project then navigate in project directory and run `npm install`.

Then run `npm link` in project directory to make the script global.
# Commands 

-  `replaceStr`

    Replace a string with a provided string for all file names in directory.<br>If no replacement string is provided, string will be cut.
    
    ### Usage examples
    - `dosmth replaceStr [string-to-replace]`

        ```
        dosmth replaceStr banana
        ``` 
        will cut all "**banana**" '**s** from file names 
        
        so **./bananaTree.mp4** will become **./Tree.mp4** 

    - `dosmth replaceStr [string-to-replace] --with [string-to-replace-with]` 
        
        ```
        dosmth replaceStr banana --with potato
        ```
        will replace all "**banana**" '**s** from file names with **potato**(*es* )
        
        so **./bananaTree.mp4** will become **./potatoTree.mp4**

    For help and full list of options run `dosmth help replaceStr`


# Help
For displaying help for a command run `dosmth help [command]` in your console.

Example command for help for `replaceStr`:
```
 dosmth help replaceStr 
```