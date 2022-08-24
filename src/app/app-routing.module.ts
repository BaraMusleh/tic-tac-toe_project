import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";
import { WinnerPageComponent } from "./winner-page/winner-page.component";
import { XoGameComponent } from "./xo-game/xo-game.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    { path: 'auth', component: AuthComponent },
    { path: 'xo', component: XoGameComponent, canActivate: [AuthGuard] },
    // { path: 'xo/:ww', redirectTo: '/xo', pathMatch: 'full' },
    { path: 'winner/:winner', component: WinnerPageComponent, canActivate: [AuthGuard] }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}