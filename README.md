<div align="center">
  <h1>STAVVY TEST CASES</h1>
  <br/>
  <br/>
</div>

# Injecting user credentials from env varibles

```sh
   --env "username=username,password=password,baseUrl=url"
```
# run on sandbox env

 ```sh
npx cypress run --env "username=username,password=password" --headed
 ```

If you want to execute the tests on headless mode you can do it with the following line:
```sh
npx cypress run --env "username=username,password=password"
```

If you want to execute the specific tests you can do it with the following line:
```sh
npx cypress run --env "username=username,password=password" --spec .\cypress\integration\tests\component/component.spec.js
```

If you want to execute the tests on specific browser you can do it with the following line:
```sh
npx cypress run --env "username=username,password=password" --headed --browser firefox
```


 # run on dev env
```sh
