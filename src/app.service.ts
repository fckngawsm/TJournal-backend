import {Injectable} from '@nestjs/common'
@Injectable()
export class AppService {
    getUsers(){
        return [{ name: "kirill", title: "project" }];
    }
}