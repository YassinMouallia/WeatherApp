<!-- All Rights Belongs to Yassin Mouallia-->
# WeatherApp

This is an Angular web application that uses the latest version of Angular (19.0.4) and Bootstrap (5.3.3).
This web application's main function is to show the user the current weather given the user input(eg : London,Cairo,Tunis...) using the Open Weather API (more information here: https://openweathermap.org/current)
and displays the following information to the user:

## WeatherReport
```
+ The date of the report or the time where the weather info was collected (not to be confused with the time this report was generated on the website)
+ The current weather (Clear,Drizzle,Rain,Snow etc...)
+ The cloud coverage (eg : 50%)
+ The current temperature 
+ Humidity 
+ Wind speed 
+ Wind direction
+ Atmospheric pressure
+ The time of sunrise
+ The time of sunset
```
## Unit of Mesurement 
The user can also choose the unit of measurement for the weather information. The available options are:
```
+ Imperial
+ Metric
+ Standard
```

## Functionality
```
 
- The user is presented with an interface containing a search bar and an options menu for selecting the unit of measurement.
- The user enters the desired city name and selects the preferred unit of measurement.
- The user clicks the search button to retrieve the weather information.
- The Angular application fetches data from the OpenWeather API using the provided city name and unit of measurement.
- The application displays a table with the weather data to the user.

```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
