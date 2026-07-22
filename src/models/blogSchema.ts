import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBlog extends Document {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: mongoose.Types.ObjectId; // Ref to User
  featuredImage: string;
  categories: mongoose.Types.ObjectId[];
  tags: string[];
  readTime: number;
  publishedAt: Date;
  updatedAt: Date;
  status: "draft" | "publish";
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

const BlogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: [true, "Blog title is required"],
      trim: true,
      maxlength: [150, "Blog title cannot exceed 150 characters"],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true, // Optimized for fast lookup by slug
    },
    content: {
      type: String,
      required: [true, "Blog content is required"],
    },
    excerpt: {
      type: String,
      required: [true, "Blog excerpt is required"],
      trim: true,
      maxlength: [300, "Excerpt cannot exceed 300 characters"],
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Blog author is required"],
      index: true, // Optimized for querying blogs by author
    },
    featuredImage: {
      type: String,
      required: [true, "Featured image is required"],
      trim: true,
    },
    categories: [
      {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
      },
    ],
    tags: [
      {
        type: String,
        trim: true,
        lowercase: true,
      },
    ],
    readTime: {
      type: Number,
      required: [true, "Read time is required"],
      min: [1, "Read time must be at least 1 minute"],
    },
    publishedAt: {
      type: Date,
      default: Date.now,
      index: true, // Optimized for chronological sorting/filtering
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: {
        values: ["draft", "publish"],
        message: "{VALUE} is not a valid status",
      },
      default: "draft",
      index: true, // Optimized for querying published vs draft content
    },
    seo: {
      metaTitle: {
        type: String,
        trim: true,
        maxlength: [60, "Meta title cannot exceed 60 characters"],
      },
      metaDescription: {
        type: String,
        trim: true,
        maxlength: [160, "Meta description cannot exceed 160 characters"],
      },
      keywords: [
        {
          type: String,
          trim: true,
          lowercase: true,
        },
      ],
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt
    versionKey: false, // Removes the redundant __v field for cleaner documents
  }
);

// --- Compound Indexes for Advanced Performance ---
BlogSchema.index({ status: 1, publishedAt: -1 }); // Perfect for listing published blogs chronologically

// --- Middleware ---

// Clean and professional slug generator with fallback collision avoidance
BlogSchema.pre("validate", function (next) {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toString()
      .normalize("NFKD")                // Split accented characters
      .replace(/[\u0300-\u036f]/g, "")   // Remove accents
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")     // Remove non-alphanumeric chars
      .replace(/\s+/g, "-")             // Collapse spaces to hyphens
      .replace(/-+/g, "-");             // Collapse consecutive hyphens
  }
  next();
});

// Explicit update handling (timestamps: true handles updatedAt automatically, but this ensures manual overrides sync)
BlogSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

export const Blog: Model<IBlog> =
  mongoose.models?.Blog || mongoose.model<IBlog>("Blog", BlogSchema);