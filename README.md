# async-wp-data-store


### Install
```
$ npm install
```

### Run
```
$ npm run wp-env start
$ npm run start
```

### Use Store in Browser
```
dispatch = wp.data.dispatch( 'my-async-store' );
select = wp.data.select( 'my-async-store' );

select.getTitle() // 'Some title'
dispatch.updateTitle('Another title')
select.getTitle() // 'Another title'
```
