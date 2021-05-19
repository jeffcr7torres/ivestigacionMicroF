# Build and push docker image

### build dist folder
`npm run build:ci`

### Build image docker
`docker build -t cf1dck.cfavorita.net/ec.com.smx.base/kng-web-base:1.0.0-SNAPSHOT -f ci/docker/DockerfileCI .`

### (Optional) run docker image local
`docker run --name kng-web-base -p 8080:80 cf1dck.cfavorita.net/ec.com.smx.base/kng-web-base:1.0.0-SNAPSHOT`

### Login in docker for upload and download images
`docker login cf1dck.cfavorita.net`

### Upload docker image
`docker push cf1dck.cfavorita.net/ec.com.smx.base/kng-web-base:1.0.0-SNAPSHOT`


# Build and push helm image

### Update dependencies
`helm dep update ./ci/helm`

### Package helm chart
`helm package ./ci/helm`

### install plugin
`helm plugin install --version master https://corenegocio@bitbucket.org/corporacionfavorita/helm-nexus-push.git`

### Upload artefact
`helm nexus-push . kng-web-base-1.0.0-snapshot.tgz  -u myUser -p myPassword`  
or  
`helm nexus-push . ./ci/helm  -u myUser -p myPassword`
