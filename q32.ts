let current_users :string[] = ["admin","Eric","Humza","aatima","Ali"]
let new_users :string[] = ["admin","fatima","Haseeb","Ali","aliza","noor"]
let current_users_lower  : string [] =current_users.map(user=> user.toLowerCase())

for( let new_user of new_users){
    if(current_users.includes (new_user.toLowerCase())) {
        console.log(`sorry ${new_user},that name is taken`)

    }else{
        console.log(`yes ${new_user} , is still in available list`)
    }
}