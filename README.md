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

## Unit Tests

Build the unit test image with:

```
$ docker image build -t dops-final-project-unittests -f Dockerfile.unittests .
```

and run with:

```
$ docker container run --rm -it dops-final-project-unittests
```

The output should look like this:

```
> dops_final_project@1.0.0 test /app
> jasmine-node --matchall specs

Getting list of pets.
.

Finished in 0.008 seconds
1 test, 1 assertion, 0 failures, 0 skipped
```

Alternatively run the unit tests using the unit tests docker-compose file:

```
$ docker-compose -f docker-compose.unittests.yml up
```

which produces this output (note: showing only last part of output):

```
...
Recreating dopsfinalproject_web_1 ... done
Attaching to dopsfinalproject_web_1
web_1  |
web_1  | > dops_final_project@1.0.0 test /app
web_1  | > jasmine-node --matchall specs
web_1  |
web_1  | Getting list of pets.
web_1  | .
web_1  |
web_1  | Finished in 0.008 seconds
web_1  | 1 test, 1 assertion, 0 failures, 0 skipped
web_1  |
web_1  |
dopsfinalproject_web_1 exited with code 0
```
