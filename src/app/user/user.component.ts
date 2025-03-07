import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  // avatar = input.required<string>();
  // name = input.required<string>();

  @Output() select = new EventEmitter();
  // select = output<string>();

     get imagePath() {
     return 'assets/users/' + this.user.avatar;
    }

// imagePath = computed(() => {
//   return 'assets/users/' + this.avatar();
// });

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
