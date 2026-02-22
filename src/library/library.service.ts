import { Injectable } from '@nestjs/common';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Library } from './schema/library.schema';
import { Model } from 'mongoose';

@Injectable()
export class LibraryService {
  constructor(
    @InjectModel(Library.name)
    private readonly libraryModel: Model<Library>,
  ) { }

  create(createLibraryDto: CreateLibraryDto) {
    const library = new this.libraryModel(createLibraryDto);
    return library.save();
  }

  findAll() {
    return this.libraryModel.find().populate('books').exec();
  }

  findOne(id: string) {
    return this.libraryModel.findById(id).populate('books').exec();
  }

  update(id: string, updateLibraryDto: UpdateLibraryDto) {
    return this.libraryModel.findByIdAndUpdate(id, updateLibraryDto).exec();
  }

  remove(id: string) {
    return this.libraryModel.findByIdAndDelete(id).exec();
  }
}
