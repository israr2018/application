import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { ShowsService } from "./shows.service";
import { Show } from "./entities/show.entity";
import { CreateShowInput } from "./dto/create-show.input";
import { UpdateShowInput } from "./dto/update-show.input";

@Resolver(() => Show)
export class ShowsResolver {
  constructor(private readonly showsService: ShowsService) {}

  @Mutation(() => Show)
  createShow(@Args("createShowInput") createShowInput: CreateShowInput) {
    return this.showsService.create(createShowInput);
  }

  @Query(() => [Show], { name: "shows" })
  findAll() {
    return this.showsService.findAll();
  }

  @Query(() => Show, { name: "show" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.showsService.findOne(id);
  }

  @Mutation(() => Show)
  updateShow(@Args("updateShowInput") updateShowInput: UpdateShowInput) {
    return this.showsService.update(updateShowInput.id, updateShowInput);
  }

  @Mutation(() => Show)
  removeShow(@Args("id", { type: () => Int }) id: number) {
    return this.showsService.remove(id);
  }
}
