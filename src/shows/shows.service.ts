import { Injectable } from "@nestjs/common";
import { CreateShowInput } from "./dto/create-show.input";
import { UpdateShowInput } from "./dto/update-show.input";

@Injectable()
export class ShowsService {
  create(createShowInput: CreateShowInput) {
    return "This action adds a new show";
  }

  findAll() {
    return `This action returns all shows`;
  }

  findOne(id: number) {
    return `This action returns a #${id} show`;
  }

  update(id: number, updateShowInput: UpdateShowInput) {
    return `This action updates a #${id} show`;
  }

  remove(id: number) {
    return `This action removes a #${id} show`;
  }
}
