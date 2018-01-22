# Docker for Enterprise Operations
## Final Project

This is a simple web application displaying a photo album of stock photos.
The application is used by the final project of the Docker for Enterprise Operations course.

Please fork this repository.

## Build and Run Image

Build image with

```
$ docker image build -t training/dops-final-project .
```

or run with docker-compose:

```
$ docker-compose up
```

In your browser navigate to `localhost:3000`. You should see a nice album with animal pictures.

![](screenshot.png)

## Compatibility

This application has been tested on the latest versions of Chrome, Firefox and Safari (as of Jan. 2018).