Maths
A simple Node.js project for basic math operations, fully containerized with Docker and integrated with CircleCI for continuous integration and automated deployment to Docker Hub.

🚀 Features


Simple Node.js math application


Unit tests using Jest


Dockerized environment


Automated CI/CD pipeline with CircleCI


Automatic Docker image push to Docker Hub



📁 Project Structure
maths/
│── sum.js
│── sum.test.js
│── Dockerfile
│── .circleci/
│     └── config.yml
└── package.json


🛠️ Getting Started
✔️ Prerequisites
Make sure you have installed:


Node.js (v14+ recommended)


Docker Desktop


Git


CircleCI account


Docker Hub account



▶️ Run Locally
Clone the project:
git clone https://github.com/a-justin/maths.git
cd maths

Install dependencies:
npm install

Run tests:
npm test

Run the app:
node sum.js


🐳 Run with Docker
Build the Docker image:
docker build -t your-dockerhub-username/maths:latest .

Run the container:
docker run -it --rm your-dockerhub-username/maths:latest


🔄 CI/CD with CircleCI
This project uses CircleCI to automate:


Installing dependencies


Running Jest tests


Building the Docker image


Logging into Docker Hub


Pushing the image to your Docker Hub repository


🔧 Required Environment Variables in CircleCI
Go to:
Project Settings → Environment Variables
Add:
VariableDescriptionDOCKERHUB_USERYour Docker Hub usernameDOCKERHUB_PASSYour Docker Hub password or access token
CircleCI uses these to authenticate and push the Docker image.

📦 Deployment to Docker Hub
Once tests pass, CircleCI will:


Build the Docker image


Tag it as latest


Push it to:


docker.io/your-dockerhub-username/maths:latest

Anyone can then run it using:
docker pull your-dockerhub-username/maths:latest
docker run -it --rm your-dockerhub-username/maths:latest


🧪 Testing
Tests are written in Jest.
Run tests locally:
npm test

CircleCI automatically runs the same tests before building and deploying the Docker image.

🤝 Contributing


Fork this repository


Create a feature branch


Commit changes


Push and open a pull request
