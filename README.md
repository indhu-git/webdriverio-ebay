# Webdriverio Automatio framework for ebay.com

 ## Local setup:
 

1. Download and install nodejs(preferably version >= v18.x) based on the Operating system
   from [NodeJs download page](https://nodejs.org/en/download/)

2. Download and install docker from [Docker download](https://docs.docker.com/desktop/)

3. Clone the repo to the local machine
   
   ```
   git clone https://github.com/indhu-git/webdriverio-ebay.git
   ```

4. Change the working directory to the cloned repo

   ```
   cd webdriverio-ebay
   ```

5. Install the dependencies

   ```
   npm install
   ```

6. Install required browsers (eg. chrome or firefox)

7. Start the selenium server based on your browser preference(chrome:standalone, firefox:standalone, edge:standalone).

   ```java
   npm run chrome:standalone
   
   or
   npm run firefox:standalone
  
   or
  
   npm run edge:standalon
   ```

The above command will download and install selenium server jar file and necessary driver executables and starts the
selenium server at `http://localhost:4444/wd/hub`

8. Run the tests

   ```java
   npm run test:local
    ```
    
    
  ## Framework overview:
  
      1. The framework is designed to use Page object model to separate the business logics from webdriver io API
      2. For each page in the application, individual page/component classes are created under pages directory with respective page name. 
          For example, Page Objects for home page is created as pageobjects/homepage.
      3. Each repetitive/common UI elements are created as individual resuable components. refer filter-model.component.js
      4. The test execution can be easily controlled using CLI arguments.
      5. Tests can be executed directly form the machine or it can be packaged into a Docker image.
      
      
    
      
      
      
      
      
      
      
      


