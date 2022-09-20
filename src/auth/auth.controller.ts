import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    signup(){
        return 'hello signup is now'
    }

    @Post('login')
    login(){
        return 'hello signin'
    }

}