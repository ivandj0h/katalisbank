## DKATALIS BANK

### About

DKATALIS CLI is an Command Line Interface (CLI) Application which is use to simulate an interaction of an ATM with a retail bank.

![Dashboard](assets/images/cli_prev.png "This is the results of DKATALIS CLI APP's captured")

### Getting Started

To getting start with this Application, simply clone this repository by running this command below

```
git clone https://github.com/ivandi1980/katalisbank.git
```

or you can directly download the zip file by clicking the download button on the top right side of this repository.

### Installation

After you clone or download this repository, just run this command below

Navigate to the Folder "katalisbank", then type this command below

```
npm install -g .
```

Note : Don't forget adding DOT (.) after -g

wait until the installation finish.

### Run the Project

To running this project, simply type this command below on your favourite Terminal

```
dkatalis
```

Then, it would showing you the `Welcome Screen` with `Login`.
Enter your `Username` then press `Enter`.

after sucessfully `Login`, then you can play around with all the `Menus`

### Error on Windows

This is a special `Case Error` happen in windows, if face an error like this below :
`File C:\Users\admin\AppData\Roaming\npm\ng.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.`

what you've to do is :

First, you have to need to open the command prompt and run this command and Execute this command :
`set-ExecutionPolicy RemoteSigned -Scope CurrentUser `

Now you have to run the second command on your system. This command is:
`Get-ExecutionPolicy`

To view their policy, you need to run this command in your command prompt:
`Get-ExecutionPolicy -list`

Good Luck, and Have a niceday!

### Credit

```
Package Name : dkatalisbank
version : 1.0.0
Author : Ivandi Djoh Gah
Date : August 7, 2021
Stack : Javascript (ES6)
dependencies : chalk, figlet, inquirer, prompt-sync

```
