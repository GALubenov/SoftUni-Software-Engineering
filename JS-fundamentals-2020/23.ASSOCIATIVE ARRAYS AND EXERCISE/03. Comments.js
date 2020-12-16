function solve(input) {

    let userList = [];
    let articleList = [];
    let comments = {};

    for (let line of input) {
        let tokens = '';
        if (line.includes(':')) {
            tokens = line.split(': ');
        } else {
            tokens = line.split(' ');
        }

        if (tokens[0] === 'user') {
            let username = tokens[1];
            userList.push(username);
        } else if (tokens[0] === 'article') {
            let article = tokens[1];
            comments[article] = {};
            articleList.push(article);
        } else {
            addComments(tokens);
        }
    }

    let countOfComments = 0;

    let entries = Object.entries(comments)
    
    for (let arr of entries) {
        let name = arr[0]
        let arrFromArtickle = Object.entries(arr[1]);
      
        console.log(`Comments on ${name}`);

        for (let el of arrFromArtickle) {
            let user = el[0];
            let comments = el[1];
            console.log(comments)
            countOfComments += comments.length
          //  console.log(`--- From user ${user}: ${comments.join(', ')}`);
        }
    }


    function addComments(arr) {
        let arrOfUsersComments = arr[0].split(' ');
        let user = arrOfUsersComments.shift();
        let article = arrOfUsersComments.pop();
        let string = arr[1].split(', ').join(' - ');

        if (userList.includes(user) && articleList.includes(article)) {
            if (!comments[article].hasOwnProperty(user)) {
                comments[article][user] = [string];
            } else {
                comments[article][user].push(string);
            }
        }
    }
}

solve(['user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
   
    'someUser posts on Movies: Like, I also like movies very much'])