# Kamchatka Freeride Community
---

### Structure
```
    +Project
        +-- src (This branch)
        |   +-- _tmp
        |   +-- css
        |   +-- js
        |   +-- img
        |   \-- .jade files
        +-- build (gh-pages branch)
            \-- build files (html,css,js,etc.)
```

### Run
``` 
~$ harp server src
```
### Build 
``` 
~$ rm -rf ./build/**
~$ harp compile ./src ./build
```

### Github pages
##### Use gh-pages branch for github pages place
##### http://kamchatka-freeride.evisom.pw/
    