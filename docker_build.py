import os
import logging
import argparse

import docker


parser = argparse.ArgumentParser(description='Clean build of afterblow')
parser.add_argument('--force', action='store_true')
args = parser.parse_args()

dir_path = os.path.dirname(os.path.realpath(__file__))
client = docker.from_env()

AFTERGLOW_BUILD_IMAGE = 'afterglow_build_image'

def build_image():
    logging.info('Building image')
    client.images.build(path='build/afterglow-build-machine', tag=AFTERGLOW_BUILD_IMAGE)
    logging.info('Docker image finished building, checking image...')
    image = client.images.get(AFTERGLOW_BUILD_IMAGE)
    logging.info('Docker image is built successfuly')
    return image

try:
    image = client.images.get(AFTERGLOW_BUILD_IMAGE)
    if args.force:
        logging.info('Removing old image')
        client.images.remove(AFTERGLOW_BUILD_IMAGE, force=True)
        image = build_image()
except docker.errors.ImageNotFound as exc:
    logging.warning('Afterglow image does not exists...')
    image = build_image()

logging.info('Running container...')

volumes = {
    dir_path: '/workspace'
}

response = client.containers.run(
    image=AFTERGLOW_BUILD_IMAGE,
    command='bash ./build/install_packages_and_build.sh',
    volumes=volumes
)

print response
