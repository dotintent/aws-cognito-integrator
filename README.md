# Getting Started with AWS Cognito Integrator

1. Create a User Pool in AWS Cognito console

2. Create AppClient

3. Fill in all data inside the file `src/aws-exports.js`:
- `userPoolId` can be found in AWS Cognito -> [your user pool] -> General Settings -> Pool Id
- `userPoolWebClientId` can be found in AWS Cognito -> App Clients -> [your app client] -> App client id 

4. Install project dependencies
```
npm install
```

5. Run the project
```
npm run start
```