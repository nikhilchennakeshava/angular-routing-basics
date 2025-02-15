# TypeScript Docs

## Typescript

Created by Microsoft.

Superset of JavaScript.

Typescript transpiled to JavaScript then deployed in browsers.

## Install Typescript

>npm i typescript -g

## Arrays

>let arr: number[];

## Functions

```
function add(a: number, b:number){
return a+b;
}
```

We can add types to arguments.

### Optional arguments

>Denoted with ?  
>Optional arguments always needs to be at the end.

```
function add(a: number, b:number, c?: number): number{
return a+b;
}
```

### Default arguments

>Denoted with =  
>Default arguments always needs to be at the end.

```
function add(a: number, b:number, c: number = 10): number{
return a+b+c;
}
```

We can add return types to the functions also.

Typescript has implicit typing.
We can do Union typings.

## Classes

Classes cannot have overloaded constructors.

```
class Person {
	constructor(private name: string) {
	}
}
```

properties can have readonly modifier.

## Inheritance

extends
super

## Duck Typing

If properties and methods are similar, Objects and classes are the same.

## Generics

### Functions

```
function echo<T>(arg: T): T{
return arg;
}

function echo<T extends Class>(arg: T): T{
return arg;
}
```

## Export

>use export keyword.

>import {...} from './...'

## Make tsc behave like nodemon

>tsc file.ts --out file_js.js --watch

## tsc help

>tsc -help

## ts config file

>tsc --init -> creates config file  
>$tsc --init  
>tsconfig.json

## node project

>npm init  
>npm init -y

>lodash - useful npm package

## Type definitions

We can import types so that we get autocomplete.

To use autocomplete of 3rd party packages like lodash in our ts file,
we do

>import * as _ from 'lodash';

To run a typescript project:

>tsc && node file.js

Also we use Type definitions:

>npm install @types/lodash --save-dev

Now all autocomplete will work.

Type definition libraries have been created to add typing for js libraries

## Setup

At start of project, do these 2 things:

>\$ npm init  
>$ tsc --init

We can create our own script by adding in scripts of package.json of our node project

>\$ npm request lodash --save  
>\$ npm @types/request @types/lodash --save-dev
