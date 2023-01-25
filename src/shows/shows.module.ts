import { Module } from "@nestjs/common";
import { ShowsService } from "./shows.service";
import { ShowsResolver } from "./shows.resolver";

@Module({
  providers: [ShowsResolver, ShowsService],
})
export class ShowsModule {}
