---
layout: post
title: La Aventura de Aerolínea PanAmérica
excerpt: I recently finished a fake travel web site for Spanish students. You can see it, or the GitHub repo.
author: Tim
tags: school, tech
---

I recently finished a fake travel web site for Spanish learners. You can look at it [here](https://nice-ocean-041844510.5.azurestaticapps.net) [^1], or check out the [Github repo](https://github.com/timburr1/panam).  

It was built with React, based on Brian Holt's [Complete Intro to React v5](https://github.com/btholt/complete-intro-to-react-v5) course for [FrontEndMasters](https://frontendmasters.com/courses/complete-react-v5/). This was overkill, but I needed to learn React for work.  

To run it locally, make sure you have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/get-npm) installed.  

Open a terminal in Visual Studio Code or PowerShell; cd into the project root; run 'npm run dev'; point a web browser at [localhost:5173/](http://localhost:5173/)  

Some helpful VSCode extensions:  
* Azure App Service  
* ESLint  
* npm Intellisense  
* Prettier (File -> Preferences -> Settings, enable 'Format on Save' and 'Prettier: Require Config')  

Other useful resources:  
* [Azure Fundamentals Learning Path](https://docs.microsoft.com/en-us/learn/paths/azure-fundamentals/)  
* [Quickstart: Create a Node.js web app in Azure](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-nodejs)  
* [Getting Started](https://reactjs.org/docs/getting-started.html) with React  
* MDN: [Cascading Style Sheets](https://developer.mozilla.org/en-US/docs/Web/CSS)  
* [CI/CD with Github](https://docs.microsoft.com/en-us/azure/app-service/deploy-continuous-deployment)  

[react-datepicker](https://www.npmjs.com/package/react-datepicker) is cool.  

<br /><img src="/images/panam screenshot-min.png" alt="" width="100%" />  

[^1]: NB that this site is hosted using Microsoft Azure's free tier, so it will load very slowly the first time you open it.  