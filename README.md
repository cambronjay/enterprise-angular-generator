# Getting Started with Enterprise Angular Generators

I will continue to add generators to this module and keep it updated. If you have ideas let me know!
These generators are based on a unique folder structure and utilize fuctional programming. 

Main App Files: `src/app`

Lazy Loaded Screens/Components : `src/screens`

## Custom lazy loaded ngrx screen component generator

You will need to add a screens folder to hold your routable page/screen components! The app folder is meant to contain your main app component files and state files.

This generator allows you to create a new screen for your application with its own managed state:

`ng g screen MyScreenName --collection enterprise-angular-generator` 

The files will be placed in `src/screens`

Next add the navigation item for your new screen to `app/app.component.html`

Next add the route to your lazy loaded module in `app/app.router.ts`

Finally add an interface for your screen state within your interface folder. 

You should name it `IMyScreenName.interface.ts`

 