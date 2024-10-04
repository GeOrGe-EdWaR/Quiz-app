import { Component } from '@angular/core';
import { GroupService } from './services/group.service';
import { Group } from './interfaces/group';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent {
  groups: Group[] = [];

  constructor(private groupService: GroupService) {}

  ngOnInit() {
    this.AllGroups();
  }

  AllGroups() {
    this.groupService.getAllGroups().subscribe({
      next: (res) => {
        this.groups = res;
      },
    });
  }

  AddGroup() {}

  editGroup(group: Group) {}

  deleteGroup(group: Group) {}
}
